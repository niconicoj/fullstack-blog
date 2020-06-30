import { Typography } from "@material-ui/core";
import React from "react";

interface ListItemRendererProps {
  children: string
}

const ListItemRenderer = (props: ListItemRendererProps) => {
  return <Typography component="li">{props.children}</Typography>
}

export default ListItemRenderer;