import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import router from "./routes";
import { Amplify } from "aws-amplify";
import "./App.css";
import { NavigationProgress } from "@mantine/nprogress";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { RouterProvider } from "react-router";
import "./styles/_login.scss";
import awsmobile from "../aws-exports";
import { Notifications } from "@mantine/notifications";
import {
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

function App() {
  Amplify.configure(awsmobile);
  const { route } = useAuthenticator((context) => [context.route]);
  const queryClient = new QueryClient()
  return (
    <MantineProvider>
      <ModalsProvider>
      <QueryClientProvider client={queryClient}>
        {route === "authenticated" ? (
          <>
            <Notifications />
            <RouterProvider
              router={router}
              fallbackElement={
                <NavigationProgress autoReset progressLabel="Loading Page" />
              }
            />
          </>
        ) : (
          <div className="login-template">
            <Authenticator
              signUpAttributes={["email", "name", "phone_number"]}
              loginMechanisms={["email"]}
            />
          </div>
        )}
        </QueryClientProvider>
      </ModalsProvider>
    </MantineProvider>
  );
}

export default App;
