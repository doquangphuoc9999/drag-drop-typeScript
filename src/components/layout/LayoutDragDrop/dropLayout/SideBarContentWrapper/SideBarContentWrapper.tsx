import { ReactNode } from "react";

export interface SideBarContentWrapperProps {
    children: ReactNode
}

const SideBarContentWrapper: React.FC<SideBarContentWrapperProps> = ({
    children
}) => {

    return <div className='SideBarContentWrapper'>
        {children}
    </div>
};

export default SideBarContentWrapper;