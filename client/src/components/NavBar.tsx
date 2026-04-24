import { Box, Button, AppBar, Toolbar, Typography } from "@mui/material";

export default function NavBar() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography variant="h6">TaskBoard</Typography>

          <Button variant="contained">Add Note</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
