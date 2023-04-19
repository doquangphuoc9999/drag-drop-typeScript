import DetailStyleButtonPanel from '../DetailStyleButtonPanel/DetailStyleButtonPanel';
import './EditItemSlideMenu.css'

export interface EditItemSlideMenuData {
    id: number,
    name: string
}

export interface EditItemSlideMenuProps {
    typeName: string | null,
    dragElement?: React.RefObject<HTMLDivElement>,
    dragStart: (event: React.DragEvent<HTMLDivElement>) => void
}

const EditItemSlideMenu: React.FC<EditItemSlideMenuProps> = ({
    typeName,
}) => {

    return <div 
        className={`EditItemSlideMenu ${typeName == null ? "Hidden" : ""}`}>
        <DetailStyleButtonPanel />
    </div>
};

export default EditItemSlideMenu;