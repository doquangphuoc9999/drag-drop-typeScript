import { Box } from "@mui/material";
import { useState } from "react";
import ButtonsPanel from "./ButtonsPanel/ButtonsPanel";
import DetailStyleButtonPanel from "./DetailStyleButtonPanel/DetailStyleButtonPanel";
import './SideBar.css';
import SideBarContentWrapper from "./SideBarContentWrapper/SideBarContentWrapper";
import SideBarNav from "./SideBarNav/SideBarNav";

interface Nav {
    id: number
    name: string,
}

const DEFAULT_NAVS: Nav[] = [{
    id: 1,
    name: "상자"
}, {
    id: 2,
    name: "스타일"
}];

export interface SideBarProps {
    typeName: string | null
}

const SideBar: React.FC<SideBarProps> = ({ }) => {
    const [activeNav, setActiveNav] = useState<number>(1);
    const [navs, _setNavs] = useState<Nav[]>(DEFAULT_NAVS);

    return (
        <Box>
            <div className="SideBar">
                <div className="NavBar">
                    {navs.map((nav: Nav, index: number) => <SideBarNav
                        key={index}
                        id={nav.id}
                        navName={nav.name}
                        isActive={activeNav === nav.id}
                        handleClick={() => setActiveNav(nav.id)}
                    />)}
                </div>
                <SideBarContentWrapper>
                        {activeNav == 1 ?
                            <ButtonsPanel />
                            :
                            <DetailStyleButtonPanel />}
                    </SideBarContentWrapper>
            </div>
        </Box>
    )
}

export default SideBar;