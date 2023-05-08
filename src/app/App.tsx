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

function App() {
  const isLocalhost = Boolean(
    window.location.hostname === "localhost" ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === "[::1]" ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
  );
  
  // Assuming you have two redirect URIs, and the first is for localhost and second is for production
  const [
    localRedirectSignIn,
    productionRedirectSignIn,
  ] = awsmobile.oauth.redirectSignIn.split(",");
  
  const [
    localRedirectSignOut,
    productionRedirectSignOut,
  ] = awsmobile.oauth.redirectSignOut.split(",");
  
  const updatedAwsConfig = {
    ...awsmobile,
    oauth: {
      ...awsmobile.oauth,
      redirectSignIn: isLocalhost ? localRedirectSignIn : productionRedirectSignIn,
      redirectSignOut: isLocalhost ? localRedirectSignOut : productionRedirectSignOut,
    }
  }
  Amplify.configure(updatedAwsConfig);
  const { route } = useAuthenticator((context) => [context.route]);
  return (
    <MantineProvider>
      <ModalsProvider>
        
          {route === "authenticated" ? (
              <>
          <Notifications />
            <RouterProvider
              router={router}
              fallbackElement={<NavigationProgress autoReset progressLabel="Loading Page" /> } />
              </>
            ) : (
            <div className="login-template">
              <Authenticator
                signUpAttributes={["email", "name", "phone_number"]}
                loginMechanisms={["email"]}
                socialProviders={["google"]}
              />
            </div>
          )}
      </ModalsProvider>
    </MantineProvider>
  );
}

export default App;
