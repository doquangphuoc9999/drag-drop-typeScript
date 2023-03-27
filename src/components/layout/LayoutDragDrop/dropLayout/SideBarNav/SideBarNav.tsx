import "./SideBarNav.css";

export interface SideBarNavProps {
    id: number
    navName: string,
    isActive: boolean,
    handleClick: (id: number) => void,
    dragElement?: React.RefObject<HTMLDivElement>
};

const SideBarNav: React.FC<SideBarNavProps> = ({
    id,
    navName,
    isActive,
    handleClick,
    dragElement
}) => {
    return <div ref={dragElement}
        className={`SideBarNav ${isActive ? "Active" : ""}`} 
        onClick={() => handleClick(id)}>
        <span>{navName}</span>
    </div>
}

export default SideBarNav;