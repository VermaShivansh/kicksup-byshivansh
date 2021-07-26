import React, { useState } from "react"
import { Typography, AppBar, Toolbar, Grid, Box, useMediaQuery, Drawer, Button, List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core"
import clsx from "clsx"
import { makeStyles } from "@material-ui/styles"
import { Link, NavLink } from "react-router-dom"
import blacklogo from "./images/black_logo.png"
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined"
import MenuRoundedIcon from "@material-ui/icons/MenuRounded"

const useStyles = makeStyles({
  root: {
    backgroundColor: "#FFF",
    color: "black",
    textDecoration: "none",
    fontSize: "small",
    fontWeight: "600",
    letterSpacing: "2px",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
})

const Navbar = () => {
  const classes = useStyles()
  const matches600 = useMediaQuery("(max-width:600px)")
  const matches900 = useMediaQuery("(max-width:900px)")
  const [state, setState] = React.useState({
    top: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return
    }

    setState({ ...state, [anchor]: open })
  }
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <NavLink exact to="/" className="lineafter">
            {" "}
            HOME{" "}
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/journey" className="lineafter">
            {" "}
            THE JOURNEY{" "}
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/team" className="lineafter">
            {" "}
            TEAM{" "}
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/store" className="lineafter">
            {" "}
            STORE{" "}
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/contact" className="lineafter">
            {" "}
            CONTACT{" "}
          </NavLink>
        </ListItem>
        <ListItem>
          <Link to="#">
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PermIdentityOutlinedIcon fontSize="large" /> <span>GAGAN</span>
            </Box>
          </Link>
        </ListItem>
      </List>
    </div>
  )

  return (
    <Grid>
      <AppBar position="static" elevation={0}>
        <Toolbar className={classes.root}>
          {/* Following code is displayed for screens above 900px*/}

          {!matches900 && (
            <Grid container p={2} px={0} pb={4}>
              <Grid md={2} item textAlign="right">
                <Link to="/">
                  <img src={blacklogo} alt="logo" width="40px" />
                </Link>
              </Grid>
              <Grid md={8} container sx={{ display: "flex", justifyContent: "space-evenly" }} item textAlign="center" p={2}>
                <Grid lg={7} md={10} xs={12} item sx={{ display: "flex", justifyContent: "space-evenly" }}>
                  <NavLink exact to="/" className="lineafter">
                    {" "}
                    HOME{" "}
                  </NavLink>
                  <NavLink to="/journey" className="lineafter">
                    {" "}
                    THE JOURNEY{" "}
                  </NavLink>
                  <NavLink to="/team" className="lineafter">
                    {" "}
                    TEAM{" "}
                  </NavLink>
                  <NavLink to="/store" className="lineafter">
                    {" "}
                    STORE{" "}
                  </NavLink>
                  <NavLink to="/contact" className="lineafter">
                    {" "}
                    CONTACT{" "}
                  </NavLink>
                </Grid>
              </Grid>
              <Grid md={2} item textAlign="left" p={1} px={0}>
                <Link to="#">
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <PermIdentityOutlinedIcon fontSize="large" /> <span>GAGAN</span>
                  </Box>
                </Link>
              </Grid>
            </Grid>
          )}

          {/*The below code is displayed for screens below 900px */}

          {matches900 && (
            <Grid container xs={12} justifyContent="space-between" pt={1}>
              <Grid sx={{ display: "flex", alignItems: "center" }}>
                <Link to="/">
                  <img src={blacklogo} alt="logo" width="40px" />
                </Link>
              </Grid>
              <Grid>
                <div>
                  {["top"].map((anchor) => (
                    <React.Fragment key={anchor}>
                      <Button onClick={toggleDrawer(anchor, true)}>
                        <MenuRoundedIcon fontSize="large" sx={{ color: "#000" }} />
                      </Button>
                      <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                      </Drawer>
                    </React.Fragment>
                  ))}
                </div>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </Grid>
  )
}

export default Navbar
