import { Box, Button, AppBar, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { CreateTaskModal } from ".";

export default function NavBar() {
  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);

  return (
    <>
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

            <Button
              variant="contained"
              sx={{ bgcolor: "#7bc0e8", color: "#1c303b" }}
              onClick={() => setOpenCreateModal(true)}
            >
              Add Task
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <CreateTaskModal
        open={openCreateModal}
        handleClose={() => setOpenCreateModal(false)}
      />
    </>
  );
}
