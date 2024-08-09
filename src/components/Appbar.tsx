import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TerminalIcon from "@mui/icons-material/Terminal";

export default function ButtonAppBar() {
  const pages = ["Home", "About", "Portfolio", "Contact"];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{backgroundColor: "#546e7a"}}>
        <Toolbar>
          <TerminalIcon fontSize="large"></TerminalIcon>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, fontFamily: "Impact" }}
          >
            MF
          </Typography>
          <Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: "white", display: "block", fontFamily: "Monospace", fontWeight: "bold", fontSize: "large" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
