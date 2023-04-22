import { useQuery } from "react-query";
import { Title } from "@mantine/core";
import UserTable from "../../common-components/User/user.table";
import { listUser } from "../../api/graphql/users/api.user";
import { ErrorComponent } from "../../common-components/Errors/Error/Error.component";

export function Component() {

  const { data , isLoading, error, isError, isFetching, status } = useQuery(["user"], () =>
    listUser(),
    {
    refetchOnWindowFocus: false,
    }
  );

  if(isError) {
    return(
      <ErrorComponent error={error} />
    )
  }

  return (
        <>
          <Title order={1}>Users</Title>
          <UserTable data={data} isLoading={isLoading} enableHeader={true} />
        </>
  );
}


Component.displayName = "Users";
