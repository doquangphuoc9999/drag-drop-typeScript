import "./SideBarNav.css";

export interface SideBarNavProps {
    id: number
    navName: string,
    isActive: boolean,
    handleClick: (id: number) => void
};

const SideBarNav: React.FC<SideBarNavProps> = ({
    id,
    navName,
    isActive,
    handleClick,
}) => {
    return <div draggable={true}
        className={`SideBarNav ${isActive ? "Active" : ""}`} 
        onClick={() => handleClick(id)}>
        <span>{navName}</span>
    </div>
}

export default SideBarNav;