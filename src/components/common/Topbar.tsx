import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfig";

export type Topbar = {
    title: string
}

const Topbar = (props: Topbar) => {
    return (
        <AppBar
            position="fixed"
            sx={{
                width: `calc(100% - ${sizeConfigs.sidebar.width})`,
                ml: sizeConfigs.sidebar.width,
                boxShadow: "unset",
                backgroundColor: colorConfigs.topbar.bg,
                color: colorConfigs.topbar.color
            }}>
            <Toolbar>
                <Typography variant="h6">
                    {props.title}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Topbar;