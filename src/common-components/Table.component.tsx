import { useEffect, useState } from "react"
import { getCourse, listCourse } from "../app/api/graphql/courses/api.course"
import { Text, TextInput } from '@mantine/core';
import sortBy from 'lodash/sortBy';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { IconPlus } from '@tabler/icons-react';
import { AppShell, Navbar, Header } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import '../styles/_table.scss'


export const Table = ({list}: any) => {

    const [opened, { open, close }] = useDisclosure(false);

    const content =
    '<h2 style="text-align: center;">Welcome to Mantine rich text editor</h2><p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. <code>RichTextEditor</code> is based on <a href="https://tiptap.dev/" rel="noopener noreferrer" target="_blank">Tiptap.dev</a> and supports all of its features:</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li><li>And all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li></ul>';
  
    const editor = useEditor({
      extensions: [
        StarterKit,
        Underline,
        Link,
        Superscript,
        SubScript,
        Highlight,
        TextAlign.configure({ types: ['heading', 'paragraph'] }),
      ],
      content,
    });

    const list_courses = list.items
    console.log(list_courses);

    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({ columnAccessor: 'name', direction: 'asc' });
    const [records, setRecords] = useState(sortBy(list_courses, 'name'));
  
    useEffect(() => {
      const data = sortBy(list_courses, sortStatus.columnAccessor);
      setRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
    }, [sortStatus]);
  
    const DateFormatter = (date: any) => {
      let formattedDate = new Date(date).toLocaleString().split('-')[0]
      return formattedDate
    }
   
return (
<div className="table-template">
  <div className="table-header">
    <h2 className="title">Table Title</h2>
    <Button className="add-course" onClick={open} leftIcon={<IconPlus />}>
      Add Course
    </Button>
  </div>
  <DataTable
    withBorder
    withColumnBorders
    records={records}
    columns={[
      { accessor: "course_name", width: "20%", sortable: true },
      { accessor: "course_code", width: "20%", sortable: true },
      { accessor: "course_start_date", width: "20%" },
      {
        accessor: "course_end_date",
        width: "20%",
        sortable: true,
        // render: ({ createdAt }) =>
        //   new Date(createdAt).toLocaleString().split("-")[0],
      },
      {
        accessor: "createdAt",
        width: "20%",
        sortable: true,
        render: ({ createdAt }) =>
          new Date(createdAt).toLocaleString().split("-")[0],
      },
      
      { accessor: "state", sortable: true },
    ]}
    sortStatus={sortStatus}
    onSortStatusChange={setSortStatus}
  />

  <Modal opened={opened} onClose={close} withCloseButton={false} size="xl" >
    <div className="modal-wrapper">
      <h2>Course Details</h2>
    <TextInput
      placeholder="Course Name" label="Course Name"
    />
    <TextInput
      placeholder="Course Code" label="Course Code"
    />

    <label className="mantine-InputWrapper-label mantine-TextInput-label mantine-1fzet7j" id="mantine-uunsviilp-label">Course Description</label>
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar sticky stickyOffset={60}>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold />
          <RichTextEditor.Italic />
          <RichTextEditor.Underline />
          <RichTextEditor.Strikethrough />
          <RichTextEditor.ClearFormatting />
          <RichTextEditor.Highlight />
          <RichTextEditor.Code />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.H1 />
          <RichTextEditor.H2 />
          <RichTextEditor.H3 />
          <RichTextEditor.H4 />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Blockquote />
          <RichTextEditor.Hr />
          <RichTextEditor.BulletList />
          <RichTextEditor.OrderedList />
          <RichTextEditor.Subscript />
          <RichTextEditor.Superscript />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Link />
          <RichTextEditor.Unlink />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.AlignLeft />
          <RichTextEditor.AlignCenter />
          <RichTextEditor.AlignJustify />
          <RichTextEditor.AlignRight />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  

    {/* add visibility toggle switch here (YES/NO)*/}

    <DateTimePicker 
      label="Start Date"
      placeholder="Pick date and time"
    />
    <DateTimePicker 
      label="End Date"
      placeholder="Pick date and time"
    />
    
    {/* Image , file input here */}

    <TextInput
      placeholder="Course Format" label="Course Format"
    />
    <TextInput
      placeholder="Course Credit" label="Course Credit"
    />

    <Button className="course-submit">
      Submit
    </Button>
    </div>
  </Modal>
</div>
)
}

