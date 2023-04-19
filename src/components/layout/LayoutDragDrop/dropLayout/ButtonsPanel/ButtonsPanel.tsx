import React from "react";
import { EditorBtnContextProps, EditorBtnsContext } from "../../LayoutDragDrop";
import EditorButton from "../EditorButton/EditorButton";
import './ButtonsPanel.css';

export interface ButtonsPanelProps {
    // dragStart: (event: React.DragEvent<HTMLDivElement>) => void
}

const ButtonsPanel: React.FC<ButtonsPanelProps> = () => {
    const {
        editorBtns,
        onBtnClick,
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