import React from "react"
import { Typography, Card, CardContent, CardActionArea, CardMedia, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import StarOutlinedIcon from "@material-ui/icons/StarOutlined"
import StarOutlineOutlinedIcon from "@material-ui/icons/StarOutlineOutlined"
import StarHalfOutlinedIcon from "@material-ui/icons/StarHalfOutlined"
import StarHalfOutlined from "@material-ui/icons/StarHalfOutlined"

const useStyles = makeStyles({
  root: {
    maxWidth: "250px",
    margin: "2px",
    marginBottom: "10px",
  },
  media: {
    width: 180,
    height: 160,
  },
})

const ShoesCard = (props) => {
  const classes = useStyles()
  let { name, model_no, rating, price, star_rating, image } = props.data
  const starArray = []
  for (let p = 0; p < 5; p++) {
    if (star_rating >= 1) {
      starArray.push(<StarOutlinedIcon fontSize="x-small" sx={{ color: "#ffbe0b" }} />)
      --star_rating
    } else if (star_rating == 0.5) {
      starArray.push(<StarHalfOutlined fontSize="x-small" sx={{ color: "#ffbe0b" }} />)
      --star_rating
    } else {
      starArray.push(<StarOutlineOutlinedIcon fontSize="x-small" sx={{ color: "#ffbe0b" }} />)
    }
  }
  return (
    <Card className={classes.root} elevation={0}>
      <CardActionArea sx={{ padding: "10px" }}>
        <CardMedia className={classes.media} image={image} title={model_no} />
        <CardContent sx={{ padding: "5px", paddingLeft: 0 }}>
          <Typography variant="h5" component="h2" fontWeight="600">
            {name}
          </Typography>
          <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="subtitle2" color="initial">
              Rs {price}/-
            </Typography>
            <Typography variant="subtitle2" color="initial">
              {starArray.map((icon) => icon)}
            </Typography>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ShoesCard
