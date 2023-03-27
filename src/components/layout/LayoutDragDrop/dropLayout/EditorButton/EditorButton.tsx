import './EditorButton.css'

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

const EditorButton: React.FC<EditorButtonProps> = ({
    id,
    img,
    btnName,
    handleClick
}) => {

    return <div onClick={() => handleClick(id)} draggable={true} className='EditorButton'>
        <a href="#">
            <img className='imgEditorButton' src={img}></img>
            <div className='title'>{btnName}</div>
        </a>
    </div>
};

export default EditorButton;