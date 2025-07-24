import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
  return (
    <AppBar >
      <Toolbar >
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Joke Generator
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">
          Home
        </Button>
        <Button color="inherit" component={RouterLink} to="/saved">
          Saved
        </Button>
      </Toolbar>
    </AppBar>
  );
}
