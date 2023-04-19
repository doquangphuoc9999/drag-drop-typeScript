import { DetailItemMenuProps } from "../layout/LayoutDragDrop/LayoutDragDrop";
import './Menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

export interface DetailItemMenuData {
    items: DetailItemMenuProps[]
}

const Menu: React.FC<DetailItemMenuData> = ({ items }) => {
    return (
        <div className="wrapper-menu">
            <ul className="listItem">
                {items.map((item: DetailItemMenuProps, index: number) => (
                    <li key={index}>{item.content} </li>
                ))}
            </ul>
        </div>
    )
}

export default Menu;