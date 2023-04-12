import { Center, Loader } from "@mantine/core";

export default function Loading(){

    return(
        <Center  my={"auto"} mx="auto">
            <Loader size={"xl"}/>
        </Center>
    )
}