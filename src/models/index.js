// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const CourseFormat = {
  "WEEKY": "WEEKY"
};

const { Courses } = initSchema(schema);

export {
  Courses,
  CourseFormat
};