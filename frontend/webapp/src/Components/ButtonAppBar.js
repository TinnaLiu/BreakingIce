import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #e3d0f5, #d0e4f5)",
    border: 0,
    marginBottom: 15,
    color: "black",
    padding: "5px 30px",
    justifyContent: "center"
  }
});

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <AppBar
      className={classes.root}
      title={
        <IconButton
          size='large'
          edge='start'
          color='primary'
          aria-label='menu'
          sx={{ mr: 2 }}
        >
          <SportsEsportsIcon />
        </IconButton>
      }
    >
      <Toolbar style={{ justifyContent: "center" }}>
        <nav>
          <Button
            color='primary'
            style={{ marginRight: 50 }}
            component={Link}
            to='/explore'
            color='primary'
          >
            <Typography variant='h6' component='div'>
              explore
            </Typography>
          </Button>
          <Button
            color='primary'
            style={{ marginRight: 50 }}
            component={Link}
            to='/add-game'
            color='primary'
          >
            <Typography variant='h6' component='div'>
              Add game
            </Typography>
          </Button>
          <Button
            color='primary'
            style={{ marginRight: 50 }}
            component={Link}
            to='/profile'
            color='primary'
          >
            <Typography variant='h6' component='div'>
              Profile
            </Typography>
          </Button>
        </nav>
      </Toolbar>
    </AppBar>
  );
}
