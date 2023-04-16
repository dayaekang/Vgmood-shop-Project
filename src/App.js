import { Outlet } from "react-router-dom";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Navbar from './components/Navbar';
import { UserContextProvider } from "./context/UserContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <Navbar/>
        <Outlet/>
      </UserContextProvider>
    </QueryClientProvider>
    );
}

export default App;
