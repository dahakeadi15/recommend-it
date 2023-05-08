import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function MovieCard(props) {
  return (
    <Card sx={{ maxWidth: 345, bgcolor: "primary.main", margin: "2.4rem" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="120"
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
          <Typography
            variant="body2"
            color="text.primary"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "3",
              WebkitBoxOrient: "vertical",
            }}
          >
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
