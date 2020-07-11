import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { styles } from "./styles";
import ApiToolTip from "../toolTip";

const ApiCard = ({
  image,
  title = "",
  description = "",
  id,
  onClickCard,
  buttonArray = [],
}) => {
  const classes = styles();

  return (
    <Card key={id} onClick={() => onClickCard(id)}>
      <CardActionArea>
        <CardMedia
          component='img'
          className={classes.media}
          image={image}
          title={title}
        />
        <CardContent>
          <ApiToolTip text={title}>
            <Typography gutterBottom variant='h5' component='h2' align='center'>
              {title.length > 21 ? title.substring(0, 21) + "..." : title}
            </Typography>
          </ApiToolTip>
          <ApiToolTip text={description}>
            <Typography variant='body2' color='textSecondary' component='p'>
              {description.length > 43
                ? description.substring(0, 43) + "..."
                : description}
            </Typography>
          </ApiToolTip>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: "space-between" }}>
        {buttonArray.map((button) => (
          <Button
            disableElevation
            size='medium'
            variant='contained'
            fullWidth
            color={button.color}
            onClick={() => button.function(id)}
          >
            {button.label}
          </Button>
        ))}
      </CardActions>
    </Card>
  );
};

export default ApiCard;
