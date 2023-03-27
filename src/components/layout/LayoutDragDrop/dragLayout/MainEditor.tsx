import { Box } from "@mui/material";
import React from "react";
import EditorItem, { EditorItemData } from "./EditorItem/EditorItem";

export interface MainEditorProps {
    items: EditorItemData[],
    handleItemClick: (typeName: string) => void,
    dropContainer?: React.RefObject<HTMLDivElement>,
}

const MainEditor: React.FC<MainEditorProps> = ({items, handleItemClick,dropContainer}) => {
    return (
        <Box>
            {items.map((item: EditorItemData, index: number) => <EditorItem 
                key={index} 
                itemData={item}
                handleClick={handleItemClick}
                dropContainer={dropContainer}
            />)}
        </Box>
    )
}

export default MainEditor;