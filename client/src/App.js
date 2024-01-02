import { GoogleOAuthProvider } from "@react-oauth/google";

import Messanger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";

function App() {
  const clientId = '279231209397-il8gbiaol9k0bcafmbqj3ra7kj9li5h9.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messanger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
