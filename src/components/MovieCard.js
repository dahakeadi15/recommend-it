import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function MovieCard(props) {
  return (
    <Card sx={{ maxWidth: 345, bgcolor: "primary.main" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={props.imgUrl}
          alt={props.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="text.secondary"
          >
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
