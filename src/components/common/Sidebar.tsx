import { Avatar, Drawer, List, ListItemButton, ListItemIcon, Stack, Toolbar } from "@mui/material";
import assert from "../../assets";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfig";
import appRouter from "../../routes/appRouter";
import SideBarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";

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
                    backgroundColor: colorConfigs.siderbar.bg,
                    color: colorConfigs.siderbar.color
                }
            }}
        >

            <List disablePadding>
                <Toolbar sx={{
                    marginBottom: "20px"
                }}>
                    <Stack
                        sx={{ width: "100%" }}
                        direction="row"
                        justifyContent="center"
                    >
                        <Avatar src={assert.images.logo} />
                    </Stack>
                </Toolbar>
                {appRouter.map((route, index) => (
                    route.sidebarProps ? (
                        route.child ? (
                            <SidebarItemCollapse item={route} key={index} />
                        ) : (
                            <SideBarItem item={route} key={index} />
                        )
                    ) : null
                ))}
            </List>
        </Drawer>
    )
}

export default Sidebar;