import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { colors } from "../../configuration/assets";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: colors.neutralAlpha45,
  },
  media: {
    height: 140,
  },
});

const ItemCard = ({
  image,
  title = "",
  description,
  id,
  onClickCard,
  buttonArray,
}) => {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      key={id}
      onClick={() => onClickCard(id)}
      style={{ height: "320px" }}
    >
      <CardActionArea>
        <CardMedia
          component='img'
          className={classes.media}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2' align='center'>
            {title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div>
        <CardActions style={{ justifyContent: "space-between" }}>
          {buttonArray.map((button) => (
            <Button
              disableElevation
              size='medium'
              variant='contained'
              color={button.color}
              onClick={() => button.function(id)}
            >
              {button.label}
            </Button>
          ))}
        </CardActions>
      </div>
    </Card>
  );
};

export default ItemCard;
