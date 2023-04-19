import React, { useContext, useRef } from 'react';
import { EditorBtnsContext } from '../../LayoutDragDrop';
import './EditorButton.css';

export interface EditorButtonData {
    id: number,
    img: string,
    name: string
}

export interface EditorButtonProps {
    id: number,
    img: string,
    btnName: string,
    handleClick: (id: number) => void
}

const EditorButton: React.FC<EditorButtonProps> = ({ id, img, btnName, handleClick}) => {

    const { dragStartHandler } = useContext(EditorBtnsContext);

    console.log('EditorButton');

    return (
        <div
            onDragStart={(event) => dragStartHandler(event,"hello")}
            draggable="true"
            className='EditorButton'>
            <a href="#">
                <img className='imgEditorButton' src={img}></img>
                <div className='title'>{btnName}</div>
            </a>
        </div>
    )
};

export default EditorButton;

function useDrag(): [any, any] {
    throw new Error('Function not implemented.');
}
