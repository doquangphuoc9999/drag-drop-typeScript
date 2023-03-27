import { ListItemButton, ListItemIcon } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import colorConfigs from "../../configs/colorConfigs";
import { RootState } from "../../redux/features/store";
import { RouterType } from "../../routes/config";

type Props = {
    item: RouterType
}

const SideBarItem = ({ item }: Props) => {

    const {appState} = useSelector((state: RootState) => state.appSate)

    return (
        item.sidebarProps && item.path ? (
            <ListItemButton 
                component={Link}
                to={item.path}
                sx={{
                    "&: hover": {
                        backgroundColor: colorConfigs.siderbar.hoverBg
                    },
                    backgroundColor: appState === item.state ? colorConfigs.siderbar.activeBg
                    : "unset",
                    paddingX: "12px",
                    paddingY: "24px"
                }}
            > 
                <ListItemIcon sx={{
                    color: colorConfigs.siderbar.color
                }}>
                    {item.sidebarProps.icon && item.sidebarProps.icon}
                </ListItemIcon>
                {item.sidebarProps.displayText}
            </ListItemButton>
        ) : null
    )

}

export default SideBarItem;