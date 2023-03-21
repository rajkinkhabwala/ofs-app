import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import awsmobile from "../aws-exports";
import "../styles/_login.scss";
import { Courses } from "./courses.component";
import { AppShell, Navbar, Header } from "@mantine/core";

function Login() {
  Amplify.configure(awsmobile);
  return (
    <div className="login-template">
      <Authenticator
        signUpAttributes={["email", "name", "phone_number"]}
        loginMechanisms={["email"]}
      >
        {({ signOut, user }) => {
          return (
            <AppShell
              padding="md"
              navbar={
                <Navbar width={{ base: 300 }} height={500} p="xs">
                  {/* Navbar content */}
                </Navbar>
              }
              header={
                <Header height={60} p="xs">
                  <div onClick={signOut}>Sign Out</div>
                </Header>
              }
              styles={(theme) => ({
                main: {
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[8]
                      : theme.colors.gray[0],
                },
              })}
            >
              <Courses />
            </AppShell>
          );
        }}
      </Authenticator>
    </div>
  );
}

export default Login;
