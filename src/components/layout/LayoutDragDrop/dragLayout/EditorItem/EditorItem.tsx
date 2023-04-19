import { useRef } from "react";
import ContentDrop from "../../dropLayout/contentDrop/ContentDropForm"
import './EditorItem.css'

export interface EditorItemData {
    typeId: number,
    typeName: string
}

export interface EditorItemProps {
    itemData: EditorItemData
    handleClick: () => void,
    content: string,
    removeAndHiddenModal: () => void,
    hiddenModal: () => void,
    isShowModal: boolean,
    showModal: () => void
}


const EditorItem: React.FC<EditorItemProps> = ({ removeAndHiddenModal, hiddenModal, isShowModal, handleClick, showModal }) => {
    return (
        <div
            draggable="true"
            onClick={() => handleClick()}
            className="editoritem"
        >
            <ContentDrop
                isShowModal={isShowModal}
                removeAndHiddenModal={removeAndHiddenModal}
                handlerClick={handleClick}
                text="이 메일이 잘 안보이시나요?"
                hiddenModal={hiddenModal}
                showModal={showModal}
            />
        </div>
    )
}

export default EditorItem;