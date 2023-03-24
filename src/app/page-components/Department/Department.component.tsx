import { GraphQLError } from "graphql";
import { useLoaderData } from "react-router-dom";
import { listDepartment } from "../../api/graphql/departments/api.department";
import { Title } from "@mantine/core";
import DepartmentTable from "../../common-components/Department/Department.Table";

export interface ListDepartmentResult {
  items: [] | undefined;
  nextToken: string | null | undefined;
  errors: GraphQLError[] | undefined;
  extenstions: { [key: string]: any } | undefined;
}
export async function loader() {
  return await new Promise((resolve, reject) => {
    listDepartment().then((value) => {
      resolve({
        items: value.data?.listDepartments?.items,
        nextToken: value.data?.listDepartments?.nextToken,
        errors: value.errors,
        extentions: value.extensions
      })
    })
  });
}

export function Component() {
  let data = useLoaderData() as ListDepartmentResult;
  return (
    <>
      <Title order={1}>Departments</Title>
      <DepartmentTable
        items={data.items}
        nextToken={data.nextToken}
        errors={data.errors}
        extenstions={data.extenstions}
      />
    </>
  );
}

Component.displayName = "Department";