import { useQuery } from "react-query";
import { Page } from "../../common-components/Page/Page.component";
import Table from "../../common-components/Table/table.component";
import { listUser } from "../../api/graphql/users/api.user";
import { IconEyeFilled } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { Users } from "../../../API";

export function Component() {

  const { data , isLoading, error, isError, isFetching, status } = useQuery(["user"], () =>
    listUser(),
    {
    refetchOnWindowFocus: false,
    }
  );

  const navigate = useNavigate();

  return (
    <Page title="Users">
      {
        isError ?
        <>
        {error}
        </>
      : status === "success" ?
      <Table<Users> records={data.items!} columns={[
        {accessor: "name", width: "30%", title: "Name"},
        {accessor: "email", width: "20%", title: "Email Address"},
        {
          accessor: "Modify", width:"20%",
          render: (rowData: Users) => {
            return(
            <div className="crud-btn-container">
              <span><IconEyeFilled strokeWidth={2} color={'gray'} onClick={() => navigate(`${rowData.id}`)}/></span>
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
