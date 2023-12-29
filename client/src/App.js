
// import { GoogleOAuthProvider } from '@react-oauth/google';
// // Component
// // import Messenger from "./Component/Messenger";

// function App() {
//   const clientId='495249612208-beor84tgi93m6kfdbajfeu1ih8ud3d88.apps.googleusercontent.com';
//   return (
//     <GoogleOAuthProvider clientId={clientId}>
//      {/* <Messenger/> */}
//     </GoogleOAuthProvider>
//   );
// }

// export default App;

import { GoogleOAuthProvider } from "@react-oauth/google";
import Messenger from "./Component/Messenger";
import AccountProvider from "./Context/AccountProvider";


function App() {
  const clientId = '495249612208-beor84tgi93m6kfdbajfeu1ih8ud3d88.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
      <Messenger/>
      </AccountProvider>
      
    </GoogleOAuthProvider>
  );
}

export default App;