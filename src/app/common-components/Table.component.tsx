import { useEffect, useState } from "react";
import { TextInput, NumberInput } from "@mantine/core";
import sortBy from "lodash/sortBy";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import { DataTable, DataTableSortStatus } from "mantine-datatable";
import { IconPlus } from "@tabler/icons-react";
import { DatePicker } from "@mantine/dates";
import { RichTextEditor, Link } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Superscript from "@tiptap/extension-superscript";
import SubScript from "@tiptap/extension-subscript";
import { createCourse } from "../api/graphql/courses/api.course";
import "../styles/_table.scss";
import { CourseFormat } from "../../models";
import { useForm } from "@mantine/form";
import { CreateCoursesInput } from "../../API";

export const Table = ({ list }: any) => {


  const [opened, { open, close }] = useDisclosure(false);
  
  // Form
  const form = useForm<CreateCoursesInput>({
    initialValues: {
      course_name: '',
      course_code: '',
      course_visibility: false,
      course_description: '',
      course_start_date: undefined,
      course_end_date: undefined,
      course_format: undefined,
      course_credit: 0,
      course_image:''
    },
  })

  // Editor
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content: form.getInputProps('course_description'),
    onUpdate: (props) => {
        form.setFieldValue('course_description', JSON.stringify(props.editor.getJSON()))
    },
    editable: true,
  });

  const list_courses = list.items;

  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
    columnAccessor: "course_name",
    direction: "asc",
  });
  const [records, setRecords] = useState(sortBy(list_courses, "name"));

  useEffect(() => {
    const data = sortBy(list_courses, sortStatus.columnAccessor);
    setRecords(sortStatus.direction === "desc" ? data.reverse() : data);
  }, [list_courses, sortStatus]);


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
          { accessor: "course_description", width: "20%", sortable: true },
          { accessor: "course_format", width: "20%", sortable: true },
          { accessor: "course_image", width: "20%", sortable: true },
          { accessor: "course_visibility", width: "20%", sortable: true },

          { accessor: "course_start_date", width: "20%" },
          { accessor: "updatedAt", width: "20%" },
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

          {
            accessor: "Modify",
            render: ({ id }) => (
              <div className="crud-btn-container">
                <span>edit</span>
                <span>delete</span>
                <span>view</span>
              </div>
            ),
          },
        ]}
        sortStatus={sortStatus}
        onSortStatusChange={setSortStatus}
      />

      <Modal opened={opened} onClose={close} withCloseButton={false} size="xl">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <div className="modal-wrapper">
          <h2>Course Details</h2>
          <TextInput placeholder="Course Name" 
            label="Course Name" 
            {...form.getInputProps('course_name')}
          />
          <TextInput placeholder="Course Code" 
            label="Course Code" 
            {...form.getInputProps('course_code')}
          />
          <label
            className="mantine-InputWrapper-label mantine-TextInput-label mantine-1fzet7j"
            id="mantine-uunsviilp-label"
          >
            Course Description
          </label>
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

          {/* Start Date */}
          <DatePicker  placeholder="Pick date and time"
            {...form.getInputProps('course_start_date')}
            onChange={(value) => {
              form.setFieldValue('course_start_date', value?.toISOString())
            }}
          />

          {/* End Date */}
          <DatePicker placeholder="Pick date and time"
            {...form.getInputProps('course_end_date')}
            onChange={(value) => {
              form.setFieldValue('course_end_date', value?.toISOString())
            }}
          />

          {/* Image , file input here */}

          <TextInput placeholder="Course Format" label="Course Format" 
            // onChange={(e) => handleChange(e , e.target.name)}
            {...form.getInputProps('course_format')}
          />
          <NumberInput placeholder="Course Credit" label="Course Credit" 
            // onChange={(e) => handleChange(e , e.valueOf(e))}
            {...form.getInputProps('course_credit')}
          />

          <Button className="course-submit" type='submit'>Submit</Button>
        </div>
        </form>
      </Modal>
    </div>
  );
};

