import { Drawer, List, Stack, Toolbar, Typography, Box } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sizeConfigs.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: colorConfigs.sidebar.bg,
          color: colorConfigs.sidebar.color,
        },
      }}
    >
      <List disablePadding>
        <Toolbar sx={{ marginBottom: "20px" }}>
          <Stack
            sx={{ width: "100%" }}
            direction="row"
            justifyContent="center"
            alignItems={"center"}
            gap={2}
          >
            <DashboardOutlinedIcon />
            <Typography variant="body1">Hệ thống quản lý</Typography>
          </Stack>
        </Toolbar>
        {appRoutes.map((route, index) => (
          <>
            {route?.label && (
              <Typography
                px={"24px"}
                fontSize={14}
                fontWeight={"bold"}
                mt={4}
                mb={2}
              >
                {route.label}
              </Typography>
            )}

            <Box>
              {route.sidebarProps ? (
                route.child ? (
                  <SidebarItemCollapse item={route} key={index} />
                ) : (
                  <SidebarItem item={route} key={index} />
                )
              ) : null}
            </Box>
          </>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
