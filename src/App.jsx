import { Outlet } from "react-router-dom";
import Header from "./Components/1-Header/Header";
import { Box } from "@mui/material";
import Footer from "./Components/4-Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Box bgcolor={"var(--background-clr)"}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}

export default App;
