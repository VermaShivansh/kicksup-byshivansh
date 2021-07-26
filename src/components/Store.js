import React from "react"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import Filters from "./Filters"
import Shoes from "./Shoes.js"
import Cart from "./Cart"

const useStyles = makeStyles({})

const Team = () => {
  const classes = useStyles()
  const [priceFilterBackend, setpriceFilterBackend] = React.useState([0, 99999])
  return (
    <Grid container p={1} spacing={0} mt={1} className={classes.root}>
      <Filters setpriceFilterBackend={setpriceFilterBackend} />
      <Shoes priceFilterBackend={priceFilterBackend} />
      <Cart />
    </Grid>
  )
}

export default Team
