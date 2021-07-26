import React from "react"
import { Typography, Grid, Card, CardContent, CardActionArea, CardMedia, CardActions, useMediaQuery } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import ronaldo from "./images/ronaldo.jpg"
import behance from "./images/Behance.png"
import dribble from "./images/dribble.png"
import facebook from "./images/facebook.png"
import Medium from "./images/Medium.png"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
  },
  team: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    border: "1px solid red",
    maxWidth: "100vw",
    overflowX: "hidden",
    position: "relative !important",
  },
  bg: {
    position: "absolute",
    top: "20%",
    left: "0",
    width: "100vw",
    height: "20px",
    background: "grey",
    border: "1px solid red",
  },
  bg2: {
    position: "absolute",
    top: "60%",
    left: "0",
    width: "100vw",
    height: "20px",
    background: "grey",
    border: "1px solid red",
  },
  cardRoot: {
    width: "220px",
    // maxWidth: "250px",
    margin: "2px",
    marginX: "10px",
    marginBottom: "10px",
    maxHeight: "360px",
    transform: "scale(0.8)",
  },
  media: {
    height: 230,
  },
})
const Team = () => {
  const classes = useStyles()
  const matches900 = useMediaQuery("(max-width:900px)")
  const matches1300 = useMediaQuery("(max-width:1300px)")
  return (
    <Grid container className={classes.root}>
      <Grid xs={12} px={4} mt={6} mb={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Typography variant="h5" color="initial">
          Without bonding and coordination, every project is a failure. Look at who makes KICKSUP great. ;{")"}
        </Typography>
      </Grid>
      <Grid xs={12} classes={classes.team}>
        <Grid className="teams" px={matches900 ? 1 : matches1300 ? 1 : 11} sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
          <Card className={classes.cardRoot}>
            <CardActionArea>
              <CardMedia className={classes.media} image={ronaldo} title="image" />
            </CardActionArea>

            <CardContent sx={{ padding: "5px", marginTop: "8px", paddingLeft: 0, textAlign: "center" }}>
              <Typography variant="h6" color="initial">
                Zidane
              </Typography>
              <Typography gutterBottom variant="subtitle2" color="initial">
                Leadership and Management
              </Typography>
              <Typography variant="subtitle2" color="initial" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <LinkedInIcon color="primary" sx={{ fontSize: "33px", marginRight: "12px", cursor: "pointer" }} />
                <img src={Medium} sizes="cover" width="25px" style={{ marginRight: "12px", cursor: "pointer" }} />
                <img src={facebook} sizes="cover" width="28px" style={{ marginRight: "12px", cursor: "pointer" }} />
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.cardRoot}>
            <CardActionArea>
              <CardMedia className={classes.media} image={ronaldo} title="image" />
            </CardActionArea>

            <CardContent sx={{ padding: "5px", marginTop: "8px", paddingLeft: 0, textAlign: "center" }}>
              <Typography variant="h6" color="initial">
                Toni Kroos
              </Typography>
              <Typography gutterBottom variant="subtitle2" color="initial">
                Product developer
              </Typography>
              <Typography variant="subtitle2" color="initial" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <LinkedInIcon color="primary" sx={{ fontSize: "33px", marginRight: "12px", cursor: "pointer" }} />
                <img src={Medium} sizes="cover" width="25px" style={{ marginRight: "12px", cursor: "pointer" }} />
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.cardRoot}>
            <CardActionArea>
              <CardMedia className={classes.media} image={ronaldo} title="image" />
            </CardActionArea>

            <CardContent sx={{ padding: "5px", marginTop: "8px", paddingLeft: 0, textAlign: "center" }}>
              <Typography variant="h6" color="initial">
                Iker Casillas
              </Typography>
              <Typography gutterBottom variant="subtitle2" color="initial">
                Marketing strategy
              </Typography>
              <Typography variant="subtitle2" color="initial" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src={Medium} sizes="cover" width="25px" style={{ marginRight: "12px", cursor: "pointer" }} />
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.cardRoot}>
            <CardActionArea>
              <CardMedia className={classes.media} image={ronaldo} title="image" />
            </CardActionArea>

            <CardContent sx={{ padding: "5px", marginTop: "8px", paddingLeft: 0, textAlign: "center" }}>
              <Typography variant="h6" color="initial">
                James
              </Typography>
              <Typography gutterBottom variant="subtitle2" color="initial">
                Product Designer
              </Typography>
              <Typography variant="subtitle2" color="initial" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src={Medium} sizes="cover" width="25px" style={{ marginRight: "12px", cursor: "pointer" }} />

                <img src={behance} sizes="cover" width="25px" style={{ marginRight: "12px", cursor: "pointer" }} />
                <img src={dribble} sizes="cover" width="25px" style={{ marginRight: "12px", cursor: "pointer" }} />
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.cardRoot}>
            <CardActionArea>
              <CardMedia className={classes.media} image={ronaldo} title="image" />
            </CardActionArea>

            <CardContent sx={{ padding: "5px", marginTop: "8px", paddingLeft: 0, textAlign: "center" }}>
              <Typography variant="h6" color="initial">
                Cristiano
              </Typography>
              <Typography gutterBottom variant="subtitle2" color="initial">
                Financial Operations
              </Typography>
              <Typography variant="subtitle2" color="initial" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <LinkedInIcon color="primary" sx={{ fontSize: "33px", marginRight: "12px", cursor: "pointer" }} />

                <img src={facebook} sizes="cover" width="28px" style={{ marginRight: "12px", cursor: "pointer" }} />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid xs={12} mt={3} pb={10} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Typography variant="h5" color="initial">
          and You! ;{")"}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Team
