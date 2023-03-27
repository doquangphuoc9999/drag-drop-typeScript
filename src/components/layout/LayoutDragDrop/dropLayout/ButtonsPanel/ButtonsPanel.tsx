import EditorButton, {EditorButtonData} from "../EditorButton/EditorButton";
import './ButtonsPanel.css'
import { EditorBtnsContext, EditorBtnContextProps } from "../../LayoutDragDrop";
import React from "react";

export interface ButtonsPanelProps {
}



const ButtonsPanel: React.FC<ButtonsPanelProps> = ({
}) => {
    const {
        editorBtns,
        onBtnClick
    } = React.useContext<EditorBtnContextProps>(EditorBtnsContext)

    return <div className='ButtonsPanel'>
        {editorBtns.map(btn => <EditorButton
            key={btn.id}
            id={btn.id}
            img={btn.img}
            btnName={btn.name}
            handleClick={onBtnClick}
        />)}
    </div>
};

export default ButtonsPanel;