export interface EditorItemData {
    typeId: number,
    typeName: string
}

export interface EditorItemProps {
    itemData: EditorItemData
    handleClick: (typeName: string) => void,
    dropContainer?: React.RefObject<HTMLDivElement>
}


const EditorItem: React.FC<EditorItemProps> = ({itemData, handleClick,dropContainer}) => {
    return (
        <div onClick={() => handleClick(itemData.typeName)} className="Editoritem" ref={dropContainer}>
             type {itemData.typeId} name {itemData.typeName}
        </div>
    )
}

export default EditorItem;