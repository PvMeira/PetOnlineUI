import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { colors } from "../../configuration/assets";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: colors.neutralAlpha45,
  },
  media: {
    height: 140,
  },
});

const ItemCard = ({ name, image, imageTitle, description, id }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} key={id}>
      <CardActionArea>
        <CardMedia
          component='img'
          className={classes.media}
          image={image}
          title={imageTitle ? imageTitle : name}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2' align='center'>
            {name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button> */}
      </CardActions>
    </Card>
  );
};

export default ItemCard;
