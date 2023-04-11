import { useQuery } from "react-query";
import { Page } from "../../common-components/Page/Page.component";
import { useParams } from "react-router-dom";
import { getUser } from "../../api/graphql/users/api.user";

export function Component() {

    const params = useParams();
    const {data , isLoading, error, isError, isFetching, status } = useQuery(['users', params.id], () => getUser(params.id!))

    console.log(data)
return(
<>
      {
        isError ?
        <>
        
        {error}
        </>
      : status === "success" ?
      <>
      <Page title={data.data?.getUsers?.name!}>
        
      </Page>
      
      </>
       :
      <>
      
      </>
      }
    </>
);
}



Component.displayName = "SingleUser"