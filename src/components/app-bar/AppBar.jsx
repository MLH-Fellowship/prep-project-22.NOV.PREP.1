import { AppBar, Box, Toolbar } from "@mui/material";
import logo from "../../mlh-prep.png";

const NavBar = () => {
  return (
    <header>
      <Box>
        <AppBar
          component="nav"
          color="transparent"
          sx={{
            height: "10%",
            // marginBottom: "10%",
          }}
        >
          <Toolbar>
            <img className="logo" src={logo} alt="MLH Prep Logo"></img>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};

export default NavBar;
