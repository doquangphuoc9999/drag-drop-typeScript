import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { EditorItemData } from "./dragLayout/EditorItem/EditorItem";
import MainEditor from "./dragLayout/MainEditor";
import { EditorButtonData } from "./dropLayout/EditorButton/EditorButton";
import SideBar from "./dropLayout/SideBar";
import './styles/LayoutDragDrop.css'



const DEFAULT_EDITOR_BUTTONS: EditorButtonData[] = [{
    id: 1,
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAACICAYAAAC4PER8AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALxSURBVHgB7d0xTlRBAMfhwRAasZAeLJAW3QRdY6IX0AQvYKEH08ILSKInICauEiG0QIM9FmIhFiuzCeS/Cyb7KMzy9vsakteR7G9n5s1OZqZ/qgBV/0YBzgkCgiAgCAKCICAIAoIgIAgCgiAgCAKCICAIAoIgIAgCgiAgCAKCICAIAoIgIAgCgiAgCAKCICAIAoIgIAgCgiAgCAKCICAIAoIgIAgCgiAgCAKCICAIAoIgIAgCgiAgCAKCICAIAoIgIAgCgiAgzBYu+Hn8q2xufipHRz/KyclJaZulpcXS7T4ot+ZvFobN9E8VztUYNjY+tDKENDc3V9bXn4tiWN+UaUSv97X1MVT1f6yjIMMEMeLw8HuZFnVKyDBriDGtrCyX7sO1wTfrt+3dsr9/cKXnk2QaRsKmjBBj6txfHcy75+fny6Pu2pWfM9kEMab64T7z++TPlZ8z2QQxps+9rcEbqPrh3tneufJzJpvXriPevH1XpsnrVy8L57x2hSQICIKAYB/iH9o+t562tdK4jBAQBAFBEBAEAUEQEAQBQRAQBAFBEBDsVDe0t3dQel+2Jv60WT2Y1OmslpW7y4XxGSEa2t7ZvRZHL4+Pj0uvt1VoRhANXadzyHlqj/EIoqFud20wHZl0NYZO516hGWuIhuqc3Ly8vYwQEAQBQRAQrCEasg/RbkaIhuxDtJsgGrIP0W6CaMg+RLtZQzRkH6LdjBAQBAFBEBAEAUEQEAQx4uzdfZvvX6sXuXA5QYxYWLg9+Ht2A1Db5I1Gd5YWC8PcIDSi/uTh/cbHqbi4/cX6s2uxyfgf9QVxiRpFHSHaeGd1DaGOgk+fPBbDRYKA4I45SIKAIAgIgoAgCAiCgCAICIKAIAgIgoAgCAiCgCAICIKAIAgIgoAgCAiCgCAICIKAIAgIgoAgCAiCgCAICIKAIAgIgoAgCAiCgCAICIKAIAgIgoAgCAiCgCAICIKAIAgIgoAgCAiCgCAICIKAMFumU7/ARf2/TIXrjvSVPgsAAAAASUVORK5CYII=",
    name: "Aaaa"
}, {
    id: 2,
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAACICAYAAAC4PER8AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALxSURBVHgB7d0xTlRBAMfhwRAasZAeLJAW3QRdY6IX0AQvYKEH08ILSKInICauEiG0QIM9FmIhFiuzCeS/Cyb7KMzy9vsakteR7G9n5s1OZqZ/qgBV/0YBzgkCgiAgCAKCICAIAoIgIAgCgiAgCAKCICAIAoIgIAgCgiAgCAKCICAIAoIgIAgCgiAgCAKCICAIAoIgIAgCgiAgCAKCICAIAoIgIAgCgiAgCAKCICAIAoIgIAgCgiAgCAKCICAIAoIgIAgCgiAgzBYu+Hn8q2xufipHRz/KyclJaZulpcXS7T4ot+ZvFobN9E8VztUYNjY+tDKENDc3V9bXn4tiWN+UaUSv97X1MVT1f6yjIMMEMeLw8HuZFnVKyDBriDGtrCyX7sO1wTfrt+3dsr9/cKXnk2QaRsKmjBBj6txfHcy75+fny6Pu2pWfM9kEMab64T7z++TPlZ8z2QQxps+9rcEbqPrh3tneufJzJpvXriPevH1XpsnrVy8L57x2hSQICIKAYB/iH9o+t562tdK4jBAQBAFBEBAEAUEQEAQBQRAQBAFBEBDsVDe0t3dQel+2Jv60WT2Y1OmslpW7y4XxGSEa2t7ZvRZHL4+Pj0uvt1VoRhANXadzyHlqj/EIoqFud20wHZl0NYZO516hGWuIhuqc3Ly8vYwQEAQBQRAQrCEasg/RbkaIhuxDtJsgGrIP0W6CaMg+RLtZQzRkH6LdjBAQBAFBEBAEAUEQEAQx4uzdfZvvX6sXuXA5QYxYWLg9+Ht2A1Db5I1Gd5YWC8PcIDSi/uTh/cbHqbi4/cX6s2uxyfgf9QVxiRpFHSHaeGd1DaGOgk+fPBbDRYKA4I45SIKAIAgIgoAgCAiCgCAICIKAIAgIgoAgCAiCgCAICIKAIAgIgoAgCAiCgCAICIKAIAgIgoAgCAiCgCAICIKAIAgIgoAgCAiCgCAICIKAIAgIgoAgCAiCgCAICIKAIAgIgoAgCAiCgCAICIKAMFumU7/ARf2/TIXrjvSVPgsAAAAASUVORK5CYII=",
    name: "Bbbb"
}, {
    id: 3,
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAACICAYAAAC4PER8AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALxSURBVHgB7d0xTlRBAMfhwRAasZAeLJAW3QRdY6IX0AQvYKEH08ILSKInICauEiG0QIM9FmIhFiuzCeS/Cyb7KMzy9vsakteR7G9n5s1OZqZ/qgBV/0YBzgkCgiAgCAKCICAIAoIgIAgCgiAgCAKCICAIAoIgIAgCgiAgCAKCICAIAoIgIAgCgiAgCAKCICAIAoIgIAgCgiAgCAKCICAIAoIgIAgCgiAgCAKCICAIAoIgIAgCgiAgCAKCICAIAoIgIAgCgiAgzBYu+Hn8q2xufipHRz/KyclJaZulpcXS7T4ot+ZvFobN9E8VztUYNjY+tDKENDc3V9bXn4tiWN+UaUSv97X1MVT1f6yjIMMEMeLw8HuZFnVKyDBriDGtrCyX7sO1wTfrt+3dsr9/cKXnk2QaRsKmjBBj6txfHcy75+fny6Pu2pWfM9kEMab64T7z++TPlZ8z2QQxps+9rcEbqPrh3tneufJzJpvXriPevH1XpsnrVy8L57x2hSQICIKAYB/iH9o+t562tdK4jBAQBAFBEBAEAUEQEAQBQRAQBAFBEBDsVDe0t3dQel+2Jv60WT2Y1OmslpW7y4XxGSEa2t7ZvRZHL4+Pj0uvt1VoRhANXadzyHlqj/EIoqFud20wHZl0NYZO516hGWuIhuqc3Ly8vYwQEAQBQRAQrCEasg/RbkaIhuxDtJsgGrIP0W6CaMg+RLtZQzRkH6LdjBAQBAFBEBAEAUEQEAQx4uzdfZvvX6sXuXA5QYxYWLg9+Ht2A1Db5I1Gd5YWC8PcIDSi/uTh/cbHqbi4/cX6s2uxyfgf9QVxiRpFHSHaeGd1DaGOgk+fPBbDRYKA4I45SIKAIAgIgoAgCAiCgCAICIKAIAgIgoAgCAiCgCAICIKAIAgIgoAgCAiCgCAICIKAIAgIgoAgCAiCgCAICIKAIAgIgoAgCAiCgCAICIKAIAgIgoAgCAiCgCAICIKAIAgIgoAgCAiCgCAICIKAMFumU7/ARf2/TIXrjvSVPgsAAAAASUVORK5CYII=",
    name: "Cccc"
}, {
    id: 4,
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAACICAYAAAC4PER8AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALxSURBVHgB7d0xTlRBAMfhwRAasZAeLJAW3QRdY6IX0AQvYKEH08ILSKInICauEiG0QIM9FmIhFiuzCeS/Cyb7KMzy9vsakteR7G9n5s1OZqZ/qgBV/0YBzgkCgiAgCAKCICAIAoIgIAgCgiAgCAKCICAIAoIgIAgCgiAgCAKCICAIAoIgIAgCgiAgCAKCICAIAoIgIAgCgiAgCAKCICAIAoIgIAgCgiAgCAKCICAIAoIgIAgCgiAgCAKCICAIAoIgIAgCgiAgzBYu+Hn8q2xufipHRz/KyclJaZulpcXS7T4ot+ZvFobN9E8VztUYNjY+tDKENDc3V9bXn4tiWN+UaUSv97X1MVT1f6yjIMMEMeLw8HuZFnVKyDBriDGtrCyX7sO1wTfrt+3dsr9/cKXnk2QaRsKmjBBj6txfHcy75+fny6Pu2pWfM9kEMab64T7z++TPlZ8z2QQxps+9rcEbqPrh3tneufJzJpvXriPevH1XpsnrVy8L57x2hSQICIKAYB/iH9o+t562tdK4jBAQBAFBEBAEAUEQEAQBQRAQBAFBEBDsVDe0t3dQel+2Jv60WT2Y1OmslpW7y4XxGSEa2t7ZvRZHL4+Pj0uvt1VoRhANXadzyHlqj/EIoqFud20wHZl0NYZO516hGWuIhuqc3Ly8vYwQEAQBQRAQrCEasg/RbkaIhuxDtJsgGrIP0W6CaMg+RLtZQzRkH6LdjBAQBAFBEBAEAUEQEAQx4uzdfZvvX6sXuXA5QYxYWLg9+Ht2A1Db5I1Gd5YWC8PcIDSi/uTh/cbHqbi4/cX6s2uxyfgf9QVxiRpFHSHaeGd1DaGOgk+fPBbDRYKA4I45SIKAIAgIgoAgCAiCgCAICIKAIAgIgoAgCAiCgCAICIKAIAgIgoAgCAiCgCAICIKAIAgIgoAgCAiCgCAICIKAIAgIgoAgCAiCgCAICIKAIAgIgoAgCAiCgCAICIKAIAgIgoAgCAiCgCAICIKAMFumU7/ARf2/TIXrjvSVPgsAAAAASUVORK5CYII=",
    name: "Dddd"
}]

export interface EditorBtnContextProps {
    editorBtns: EditorButtonData[],
    onBtnClick: (id: number) => void,
    dropContainer: React.RefObject<HTMLDivElement>,
    dragElement: React.RefObject<HTMLDivElement>
}

export const EditorBtnsContext = React.createContext<EditorBtnContextProps>({
    editorBtns: [],
    onBtnClick: (id: number) => { console.log(id) },
    dropContainer: React.createRef<HTMLDivElement>(),
    dragElement:  React.createRef<HTMLDivElement>()
});

const LayoutDragDrop: React.FC = () => {
    // drap and drop
    const containerDropRef = useRef<HTMLDivElement>(null);
    const boxRef = useRef<HTMLDivElement>(null);
    const isClicked = useRef<boolean>(false);

    const coords = useRef<{
        startX: number,
        startY: number,
        lastX: number,
        lastY: number
    }>({
        startX: 0,
        startY: 0,
        lastX: 0,
        lastY: 0
    })

    useEffect(() => {
        console.log('vooooo');
        if (!boxRef.current || !containerDropRef.current) return

        const box = boxRef.current
        const container = containerDropRef.current

        const onMouseDown = (e: MouseEvent) => {
            isClicked.current = true;
            coords.current.startX = e.clientX;
            coords.current.startY = e.clientY;
        }

        const onMouseUp = (e: MouseEvent) => {
            isClicked.current = false;
            coords.current.lastX = box.offsetLeft;
            coords.current.lastY = box.offsetTop
        }

        const onMouseMove = (e: MouseEvent) => {
            if (!isClicked.current) return

            const nextX = e.clientX - coords.current.startX + coords.current.lastX;
            const nextY = e.clientY - coords.current.startY + coords.current.lastY;

            box.style.top = `${nextY}px`
            box.style.left = `${nextX}px`
        }

        box.addEventListener('mousedown', onMouseDown);
        box.addEventListener('mouseup', onMouseUp);
        box.addEventListener('mousemove', onMouseMove);
        box.addEventListener('mouseleave', onMouseUp);

        const cleanUp = () => {
            box.removeEventListener('mousedown', onMouseDown);
            box.removeEventListener('mouseup', onMouseUp);

            container.removeEventListener('mousemove', onMouseMove);
            container.removeEventListener('mouseleave', onMouseUp);
        }
        return cleanUp;
    }, [])
    const [btns, _setBtns] = useState<EditorButtonData[]>(DEFAULT_EDITOR_BUTTONS);
    const [editorItems, setEditorItems] = useState<EditorItemData[]>([]);
    const [activeEditorItem, setActiveEditorItem] = useState<string | null>(null);

    const handleEditorButtonClick = (id: number): void => {
        const clickedBtn: EditorButtonData = btns.filter(btn => btn.id == id)[0];
        const newEditorItem: EditorItemData = {
            typeId: clickedBtn.id,
            typeName: "Type_" + clickedBtn.name
        };

        setEditorItems([...editorItems, newEditorItem]);
    }

    const handleEditorItemClick = (typeName: string): void => {
        if (activeEditorItem === typeName) {
            setActiveEditorItem(null);
        } else {
            setActiveEditorItem(typeName);
        }
    }

    return (
        <EditorBtnsContext.Provider value={{
            editorBtns: btns,
            onBtnClick: handleEditorButtonClick,
            dropContainer: containerDropRef,
            dragElement: boxRef
        }}>
            <Box>
                <div className="drapdropStyles">
                    <div className="dragStyle">
                        <MainEditor dropContainer={containerDropRef} items={editorItems} handleItemClick={handleEditorItemClick} />
                    </div>
                    <div className="dropStyle">
                        <SideBar dragElement={boxRef} typeName={activeEditorItem} />
                    </div>
                </div>
            </Box>
        </EditorBtnsContext.Provider>
    )
}

export default LayoutDragDrop;