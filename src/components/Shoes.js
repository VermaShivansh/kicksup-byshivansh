import React from "react"
import { Typography, Grid, Button, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined"
import { shoesData } from "./shoesdata"
import ShoesCard from "./ShoesCard.js"

const useStyles = makeStyles({
  shoes: {
    backgroundColor: "white",
    boxShadow: " 0 4px 4px 0px rgba(0,0,0,0.12), 1px -1px 4px rgba(0,0,0,0.17)",
  },
})

const Shoes = (props) => {
  const classes = useStyles()
  const [showSearch, setshowSearch] = React.useState()
  var { priceFilterBackend } = props
  return (
    <Grid className={classes.shoes} item md={6} xs={12} m={1} p={3} pt={4}>
      <Grid xs={12} item sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" color="initial" letterSpacing={1} fontWeight={600} sx={{ transform: "scaleX(1.05)" }}>
          SHOES
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
          <Button onClick={() => setshowSearch(!showSearch)}>
            <SearchOutlinedIcon sx={{ color: "#000" }} />
          </Button>
          {/* {showSearch && <TextField id="standard-basic" sx={{ margin: 1 }} />} */}
          <Box component="span">
            <button> sort by</button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} mt={2} sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
        {shoesData.map((data, index) => {
          if (data.price >= priceFilterBackend[0] && data.price <= priceFilterBackend[1]) {
            return <ShoesCard data={data} />
          }
        })}
      </Grid>
    </Grid>
  )
}

export default Shoes
