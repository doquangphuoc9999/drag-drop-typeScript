import { Box } from "@mui/material";
import { useState } from "react";
import SideBarNav from "./SideBarNav/SideBarNav";
import './SideBar.css'
import SideBarContentWrapper from "./SideBarContentWrapper/SideBarContentWrapper";
import ButtonsPanel from "./ButtonsPanel/ButtonsPanel";
import EditItemSlideMenu from "./EditItemSlideMenu/EditItemSlideMenu";

interface Nav {
    id: number
    name: string,
}

const DEFAULT_NAVS: Nav[] = [{
    id: 1,
    name: "Buttons"
}, {
    id: 2,
    name: "Details"
}];

export interface SideBarProps {
    typeName: string | null,
    dragElement?: React.RefObject<HTMLDivElement>
}

const SideBar: React.FC<SideBarProps> = ({typeName, dragElement}) => {
    const [activeNav, setActiveNav] = useState<number>(1);
    const [navs, _setNavs] = useState<Nav[]>(DEFAULT_NAVS);

    return (
        <Box>
            <div className="SideBar">
                <EditItemSlideMenu typeName={typeName} dragElement={dragElement} />
                <div className="NavBar">
                    {navs.map((nav: Nav, index: number) => <SideBarNav
                        key={index}
                        id={nav.id}
                        navName={nav.name}
                        isActive={activeNav === nav.id}
                        handleClick={() => setActiveNav(nav.id)}
                        dragElement={dragElement}
                    />)}
                </div>
                <SideBarContentWrapper>
                    {activeNav == 1 ? <ButtonsPanel/> : <div>This is Details panel</div>}
                </SideBarContentWrapper>
            </div>
        </Box>
    )

}

export default SideBar;