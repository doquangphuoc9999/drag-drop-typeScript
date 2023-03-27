import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import colorConfigs from "../../configs/colorConfigs";
import { RootState } from "../../redux/features/store";
import { RouterType } from "../../routes/config";
import SideBarItem from "./SidebarItem";

type Props = {
    item: RouterType;
}

const SidebarItemCollapse = ({ item }: Props) => {

    const [open, setOpen] = useState(false);

    const { appState} = useSelector((state: RootState) => state.appSate)


    useEffect(() => {
        if(appState.includes(item.state)){
            setOpen(true);
        }
    },[appState, item])

    return (
        item.sidebarProps ? (
            <>
                <ListItemButton
                    onClick={() => setOpen(!open)}
                    sx={{
                        "&: hover": {
                            backgroundColor: colorConfigs.siderbar.hoverBg
                        },
                        paddingX: "12px",
                        paddingY: "24px"
                    }}
                >
                    <ListItemIcon sx={{
                        color: colorConfigs.siderbar.color
                    }}>
                        {item.sidebarProps.icon && item.sidebarProps.icon}
                    </ListItemIcon >
                    <ListItemText
                        disableTypography
                        primary={
                            <Typography>
                                {item.sidebarProps.displayText}
                            </Typography>
                        }

                    />
                    {open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
                </ListItemButton>
                <Collapse in={open} timeout="auto">
                    <List>
                        {item.child?.map((route, index) => (
                            route.sidebarProps ? (
                                route.child ? (
                                    <SidebarItemCollapse item={route} key={index} />
                                ) : (
                                    <SideBarItem item={route} key={index} />
                                )
                            ) : null
                        ))}
                    </List>
                </Collapse>
            </>
        ) : null
    )
}

export default SidebarItemCollapse;