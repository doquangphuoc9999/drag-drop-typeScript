import Box from "@mui/material/Box";
import { SectionbackgroupDetail } from "../../DetailStyleButtonPanel/DetailStyleButtonPanel";
import DivBackground from "../sectionDivBackground/DivBackground";

export interface SectionBackgroundProps {
    items: SectionbackgroupDetail[]
}

const SectionBackgroundColor:React.FC<SectionBackgroundProps> = ({items}) => {
    return (
        <Box>
            {items.map((item: SectionbackgroupDetail, index: number)=> <DivBackground 
                key={index}
                itemData={item}
            />) }
        </Box>
    )
}

export default SectionBackgroundColor;