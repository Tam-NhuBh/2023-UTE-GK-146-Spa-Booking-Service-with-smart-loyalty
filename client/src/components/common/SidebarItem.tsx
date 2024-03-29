// @ts-nocheck
import { ListItemButton, ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom";
import colorConfigs from "../../configs/colorConfigs";
import { RouteType } from "../../routes/config";
import { Typography } from "@mui/material";

type Props = {
  item: RouteType;
};

const SidebarItem = ({ item }: Props) => {
  return item.sidebarProps && item.path ? (
    <ListItemButton
      component={Link}
      to={item.path}
      sx={{
        "&: hover": {
          backgroundColor: colorConfigs.sidebar.hoverBg,
        },
        paddingY: "12px",
        paddingX: "24px",
      }}
    >
      <ListItemIcon
        sx={{
          color: colorConfigs.sidebar.color,
        }}
      >
        {item.sidebarProps.icon && item.sidebarProps.icon}
      </ListItemIcon>
      <Typography fontSize={14}>{item.sidebarProps.displayText}</Typography>
    </ListItemButton>
  ) : null;
};

export default SidebarItem;
