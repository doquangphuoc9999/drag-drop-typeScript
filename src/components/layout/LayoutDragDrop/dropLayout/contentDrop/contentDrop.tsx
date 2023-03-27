import { useState } from "react";

const [activeText, setActiveText] = useState<boolean>(true)

export interface ContentDrapProps {
    text: string
}

const handleClick = () => {
    setActiveText(false);
}
const contentDrop: React.FC<ContentDrapProps> = () => {
    return (
        <div className="contentDrap"> 
            {activeText ? <a onClick={handleClick}></a> : <input type={"text"}></input> }
        </div>
    )
}

export default contentDrop;