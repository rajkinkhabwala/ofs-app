import { useQuery } from "react-query";
import { Page } from "../../common-components/Page/Page.component";
import { UserResult, listUsers } from "../../api/admin/api.admin";
import Table from "../../common-components/Table/table.component";
import { listUser } from "../../api/graphql/users/api.user";
import { Users } from "../../../API";
import { IconEdit, IconEyeFilled, IconTrash } from "@tabler/icons-react";
import { modals } from "@mantine/modals";

export function Component() {

  const { data , isLoading, error, isError, refetch, isFetching, status } = useQuery(["user"], () =>
    listUser(),
    {
    refetchOnWindowFocus: false,
    }
  );
console.log(data)

  return (
    <Page title="Users">
      {
        isError ?
        <>
        {error}
        </>
      : status === "success" ?
      <Table records={data.items!} columns={[
        {accessor: "name", width: "30%", title: "Name"},
        {accessor: "email", width: "20%", title: "Email Address"},
        {
          accessor: "Modify", width:"20%",
          render: (rowData: any) => {
            
            return(
            <div className="crud-btn-container">
              <span>
                <IconEdit strokeWidth={2} color={'blue'} onClick={() => modals.open({
                  title: "Edit Department",
                  children: (
                    <>
                      adding soon
                    </>
                    )
                  })}/></span>
              <span onClick={() => console.log('Add soon')}><IconTrash strokeWidth={2} color={'red'}/></span>
              <span><IconEyeFilled strokeWidth={2} color={'gray'} onClick={() => console.log(rowData.id)}/></span>
            </div>
          )},
        }
      ]} 
      fetching={isLoading}
      /> :
      <>
      <Table records={[]} columns={[
        { accessor: "id", width: "20%", title: "Username", },
        {accessor: "name", width: "40%", title: "Name"},
        {accessor: "email", width: "40%", title: "Email Address"}
      ]} 
      fetching={isLoading || isFetching}
      />
      </>
      }
    </Page>
  );
}


Component.displayName = "Users";
