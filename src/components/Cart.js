import React from "react"
import { Typography, Grid, useMediaQuery, Box, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined"
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined"
import CalendarTodayIcon from "@material-ui/icons/CalendarToday"
import LocationOnOutlined from "@material-ui/icons/LocationOnOutlined"
const useStyles = makeStyles({
  cart: {
    backgroundColor: "white",
    boxShadow: " 0 4px 4px 0px rgba(0,0,0,0.12), 1px -1px 4px rgba(0,0,0,0.17)",
    height: "max-content",
    top: "10px",
  },
})

const Cart = () => {
  const classes = useStyles()
  const matches900 = useMediaQuery("(max-width:900px)")
  return (
    <Grid className={classes.cart} item md m={1} p={3} pb={1} pt={4} sx={{ position: `${matches900 ? "static" : "sticky"}` }}>
      <Grid xs={12} item sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" color="initial" letterSpacing={1} fontWeight={600} sx={{ transform: "scaleX(1.05)" }}>
          CART
        </Typography>
        <Typography variant="h6" color="initial">
          <LocalMallOutlinedIcon />
        </Typography>
      </Grid>
      <Grid item xs={12} container sx={{ display: "flex", flexDirection: "column", minHeight: "72vh" }}>
        <Box flexGrow={1} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Typography variant="body1" color="initial">
            What's stopping you, designer ?
          </Typography>
        </Box>
        <Box>
          <Grid xs={12} container my={2}>
            <Grid item xs={3} sx={{ display: "flex", alignItems: "center", color: "#6c757d", fontSize: "small", cursor: "pointer" }}>
              <LocationOnOutlinedIcon fontSize="small" /> <span style={{ marginX: "7px" }}>Home</span>
            </Grid>
            <Grid item xs={4} mx={3} sx={{ display: "flex", alignItems: "center", color: "#6d6875", fontSize: "small", cursor: "pointer" }}>
              <CalendarTodayIcon fontSize="small" />
              <span> Select Date</span>
            </Grid>
          </Grid>
          <Grid xs={12} container justifyContent="center" mt={4}>
            <button style={{ backgroundColor: "grey", color: "white", boxShadow: "none", border: "none", fontSize: "small", padding: "8px", paddingY: "4px", cursor: "pointer" }}>order now</button>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Cart
