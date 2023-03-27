import './EditItemSlideMenu.css'

export interface EditItemSlideMenuData {
    id: number,
    name: string
}

export interface EditItemSlideMenuProps {
    typeName: string | null,
    dragElement?: React.RefObject<HTMLDivElement>
}

const EditItemSlideMenu: React.FC<EditItemSlideMenuProps> = ({
    typeName,
    dragElement
}) => {

    return <div 
        className={`EditItemSlideMenu ${typeName == null ? "Hidden" : ""}`}>
        <span>sss {typeName}</span>
    </div>
};

export default EditItemSlideMenu;