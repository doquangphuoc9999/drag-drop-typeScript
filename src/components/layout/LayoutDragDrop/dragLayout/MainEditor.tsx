import React, { useRef } from "react";
import EditorItem, { EditorItemData } from "./EditorItem/EditorItem";

export interface MainEditorProps {
    items: EditorItemData[],
    handleItemClick: () => void,
    content: string,
    removeAndHiddenModal: () => void,
    hiddenModal: () => void,
    isShowModal: boolean,
    showModal: () => void
}

const MainEditor: React.FC<MainEditorProps> = ({ items, handleItemClick,showModal, content,removeAndHiddenModal,hiddenModal,isShowModal }) => {

    return (
        <div>
            {items.map((item: EditorItemData, index: number) => <EditorItem
                key={index}
                itemData={item}
                handleClick={handleItemClick}
                content={content}
                removeAndHiddenModal={removeAndHiddenModal}
                hiddenModal={hiddenModal}
                isShowModal={isShowModal}
                showModal={showModal}
            />)}
        </div>
    )
}

export default MainEditor;