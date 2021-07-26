import React from "react"
import { Typography, Grid, List, ListItem, Collapse, Checkbox, Box, Divider, useMediaQuery } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { useImmer } from "use-immer"
import filter from "./images/filter1.svg"

const useStyles = makeStyles({
  filter: {
    backgroundColor: "white",
    boxShadow: " 0 4px 4px 0px rgba(0,0,0,0.12), 1px -1px 4px rgba(0,0,0,0.17)",
    height: "max-content",
    top: "10px",
  },
})

const Filters = (props) => {
  const classes = useStyles(-1)
  const matches900 = useMediaQuery("(max-width:900px)")
  var [priceFilterFrontend, setpriceFilterFrontend] = React.useState()
  var { setpriceFilterBackend } = props
  React.useEffect(() => {
    if (priceFilterFrontend == 0) {
      setpriceFilterBackend([0, 99999])
    }
    if (priceFilterFrontend == 1) {
      setpriceFilterBackend([3000, 4000])
    }
    if (priceFilterFrontend == 2) {
      setpriceFilterBackend([4001, 7000])
    }
    if (priceFilterFrontend == 3) {
      setpriceFilterBackend([7001, 99999])
    }
  }, [priceFilterFrontend])
  return (
    <Grid container className={classes.filter} item md m={1} p={3} pt={4} sx={{ position: `${matches900 ? "static" : "sticky"}` }}>
      <Grid xs={12} item sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" color="initial" letterSpacing={1} fontWeight={600} sx={{ transform: "scaleX(1.05)" }}>
          FILTERS
        </Typography>
        <Typography variant="h6" color="initial">
          <img src={filter} alt="filter icon" width="35px" />
        </Typography>
      </Grid>
      <Grid xs={12} item>
        <Typography variant="h6" color="initial">
          Cost
        </Typography>
        <Box p={0}>
          <input
            type="checkbox"
            color="default"
            style={{ marginRight: "10px" }}
            onClick={() => {
              priceFilterFrontend == 1 ? setpriceFilterFrontend(0) : setpriceFilterFrontend(1)
            }}
            checked={priceFilterFrontend == 1 ? true : false}
          />
          3000-4000
        </Box>
        <Box p={0}>
          <input
            type="checkbox"
            color="default"
            style={{ marginRight: "10px" }}
            onClick={() => {
              priceFilterFrontend == 2 ? setpriceFilterFrontend(0) : setpriceFilterFrontend(2)
            }}
            checked={priceFilterFrontend == 2 ? true : false}
          />
          4001-7000
        </Box>
        <Box p={0}>
          <input
            type="checkbox"
            color="default"
            style={{ marginRight: "10px" }}
            onClick={() => {
              priceFilterFrontend == 3 ? setpriceFilterFrontend(0) : setpriceFilterFrontend(3)
            }}
            checked={priceFilterFrontend == 3 ? true : false}
          />
          7001+
        </Box>
      </Grid>
      <Grid xs={12} item mt={2}>
        <Typography variant="h6" color="initial">
          Color
        </Typography>
        <Box>
          <Checkbox sx={{ color: "red" }} checkedIcon={<span style={{ backgroundColor: "red", width: "22px", height: "22px", border: "3px solid black", borderRadius: "10px", transform: "scale(1.15)" }}></span>} icon={<span style={{ backgroundColor: "red", width: "22px", borderRadius: "10px", height: "22px" }}></span>}></Checkbox>
          <Checkbox sx={{ color: "blue" }} checkedIcon={<span style={{ backgroundColor: "blue", width: "22px", height: "22px", border: "3px solid black", borderRadius: "10px", transform: "scale(1.15)" }}></span>} icon={<span style={{ backgroundColor: "blue", width: "22px", borderRadius: "10px", height: "22px" }}></span>}></Checkbox>
          <Checkbox sx={{ color: "yellow" }} checkedIcon={<span style={{ backgroundColor: "yellow", width: "22px", height: "22px", border: "3px solid black", borderRadius: "10px", transform: "scale(1.15)" }}></span>} icon={<span style={{ backgroundColor: "yellow", width: "22px", borderRadius: "10px", height: "22px" }}></span>}></Checkbox>
          <Checkbox sx={{ color: "green" }} checkedIcon={<span style={{ backgroundColor: "green", width: "22px", height: "22px", border: "3px solid black", borderRadius: "10px", transform: "scale(1.15)" }}></span>} icon={<span style={{ backgroundColor: "green", width: "22px", borderRadius: "10px", height: "22px" }}></span>}></Checkbox>
          <Checkbox sx={{ color: "#FFD700" }} checkedIcon={<span style={{ backgroundColor: "#FFD700", width: "22px", height: "22px", border: "3px solid black", borderRadius: "10px", transform: "scale(1.15)" }}></span>} icon={<span style={{ backgroundColor: "#FFD700", width: "22px", borderRadius: "10px", height: "22px" }}></span>}></Checkbox>
        </Box>
      </Grid>
      <Grid mt={2} xs={12}>
        <Typography variant="h6" color="initial">
          Design templates
        </Typography>
        <Box p={0}>
          <input type="checkbox" color="default" style={{ marginRight: "10px" }} />2
        </Box>
        <Box p={0}>
          <input type="checkbox" color="default" style={{ marginRight: "10px" }} />3
        </Box>
        <Box p={0}>
          <input type="checkbox" color="default" style={{ marginRight: "10px" }} />
          3+
        </Box>
      </Grid>
      <Grid mt={2} mb={2} xs={12}>
        <Typography variant="h6" color="initial">
          Type
        </Typography>
        <Box p={0}>
          <input type="checkbox" color="default" style={{ marginRight: "10px" }} />
          Loafers
        </Box>
        <Box p={0}>
          <input type="checkbox" color="default" style={{ marginRight: "10px" }} />
          Sneakers
        </Box>
      </Grid>
      <Grid xs={12}>
        <Divider />
      </Grid>
      <Grid xs={12} mt={4} textAlign="center">
        <button style={{ backgroundColor: "black", color: "white", cursor: "pointer", padding: "5px", paddingX: "10px" }}>apply</button>
      </Grid>
    </Grid>
  )
}

export default Filters
