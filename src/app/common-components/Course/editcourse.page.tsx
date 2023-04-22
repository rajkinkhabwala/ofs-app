import { useForm } from "@mantine/form";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  CourseFormat,
  Courses,
  Departments,
  GetCoursesQuery,
  UpdateCoursesInput,
} from "../../../API";
import { GraphQLResult, GraphQLQuery } from "@aws-amplify/api";
import {
  Button,
  Group,
  Loader,
  NumberInput,
  Select,
  Switch,
  TextInput,
  Image,
  SimpleGrid,
  Overlay,
  AspectRatio,
  rem
} from "@mantine/core";
import {Storage} from "aws-amplify";
import { useListDepartmentQuery } from "../../api/queries/departments/queries.departments";
import {RichTextEditor, Link} from "@mantine/tiptap";
import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import { DatePickerInput } from "@mantine/dates";
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useMutation } from "react-query";
import { updateCourse } from "../../api/graphql/courses/api.course";
import { notifications } from "@mantine/notifications";
import dayjs from "dayjs";

interface EditCourse {
  record: GraphQLResult<GraphQLQuery<GetCoursesQuery>> | undefined;
}

export default function EditCourse({ record }: EditCourse) {
  const form = useForm<UpdateCoursesInput>({
    initialValues: {
      id: record?.data?.getCourses?.id!,
      course_code: record?.data?.getCourses?.course_code,
      course_credit: record?.data?.getCourses?.course_credit,
      course_description: record?.data?.getCourses?.course_description,
      course_end_date: record?.data?.getCourses?.course_end_date,
      course_format: record?.data?.getCourses?.course_format,
      course_image: record?.data?.getCourses?.course_image,
      course_name: record?.data?.getCourses?.course_name,
      course_start_date: record?.data?.getCourses?.course_start_date,
      course_visibility: record?.data?.getCourses?.course_visibility,
      departmentsID: record?.data?.getCourses?.departmentsID,
    },
  });


  const { data, isError, isLoading} = useListDepartmentQuery();

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
    content: form.values.course_description,
    onUpdate(props) {
        form.setFieldValue('course_description', JSON.stringify(props.editor.getJSON()))
    },
    editable: true,
  });

  const editCourseMutation = useMutation({
    mutationFn: updateCourse,
    mutationKey: "editcourse",
    onSuccess(data, variables, context) {
      notifications.show({
        title: "Successful",
        message: `Successfully edit ${data.data?.updateCourses?.course_name}`,
        color: "green",
      });
    },
  })

  function handleSubmit(){
    console.log(form.values)
    Storage.put(form.values.course_image!, files[0]).then((value) => {
      console.log(value);
      form.onSubmit((values) => {
        editCourseMutation.mutate(values);
      })
    })
    
  }

  const [files, setFiles] = useState<FileWithPath[]>([]);
  const [visible, setVisible] = useState(false);

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
        <Image
        key={index}
        src={imageUrl}
        imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl)
        }}
      />
    );
  });

  

  return (
    <>
      <div>EditCourse</div>
      <TextInput
        withAsterisk
        label="Course Name"
        placeholder="Enter the course name..."
        required
        {...form.getInputProps("course_name")}
      />
      <TextInput
        withAsterisk
        label="Course Code"
        placeholder="Enter the course code..."
        required
        {...form.getInputProps("course_code")}
      />
      <div className="switch-label">
        <label>
          Visibility <span>*</span>
        </label>
      </div>
      <Switch
        checked={form.getInputProps("course_visibility").value}
        {...form.getInputProps("course_visibility")}
      />
      <Select
        {...form.getInputProps("departmentsID")}
        label="Course Department"
        rightSection={isLoading ? <Loader /> : null}
        error={isError ?? "Data is not fetch!"}
        placeholder="Pick one department"
        data={
          isLoading
            ? []
            : data?.items.map((el: Departments) => ({
                value: el.id,
                label: el.department_name,
                selected: record ? record : null,
              }))
        }
      />
      <NumberInput
        withAsterisk
        label="Course Credit"
        placeholder="Enter the course credit..."
        required
        {...form.getInputProps("course_credit")}
      />

<RichTextEditor editor={editor} styles={{ content: {height: rem(400)}}}>
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
    <DatePickerInput
      label="Pick start date"
      placeholder="Pick start date"
      value={form.values.course_start_date === null ? dayjs(new Date()).toDate() : new Date(form.values.course_start_date!)}
      onChange={(value) => {
        form.setFieldValue('course_start_date', value?.toISOString())
      }}
      required
    />
    <DatePickerInput
      label="Pick end date"
      placeholder="Pick end date"
      value={form.values.course_end_date === null ? dayjs(new Date()).add(1, 'day').toDate() : new Date(form.values.course_end_date!)}
      onChange={(value) => {
        form.setFieldValue('course_end_date', value?.toISOString())
      }}
      required
    />
    <Select
        {...form.getInputProps("course_format")}
        label="Course Format"
        rightSection={isLoading ? <Loader /> : null}
        error={isError ?? "Data is not fetch!"}
        placeholder="Pick a format"
        data={[{value: 'WEEKY', label: 'Weekly'}]}
      />
      <Dropzone onDrop={(files) => {
        form.setFieldValue('course_image', files[0].path)
        setFiles(files);
        
      }}
      accept={IMAGE_MIME_TYPE}
      >
      </Dropzone>
      <SimpleGrid
        cols={4}
        breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
        mt={previews.length > 0 ? 'xl' : 0}
      >
        {previews}
      </SimpleGrid>
      <Group position="right" mt="md">
        <Button type="button" onClick={handleSubmit}>Submit</Button>
      </Group>
    </>
  );
}

