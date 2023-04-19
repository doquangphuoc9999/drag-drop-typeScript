import React, { useContext, useState } from 'react'
import Modal from '../../../../common/modal/Modal';
import { EditorBtnsContext } from '../../LayoutDragDrop';
import './contentDrap.css'

export interface ContentDrapProps {
    text: string,
    removeAndHiddenModal: () => void,
    backgroundColor?: string
    hiddenModal: () => void,
    handlerClick?: () => void,
    isShowModal: boolean,
    showModal: () => void,
    isShowDrop?: boolean
}
const ContentDrop: React.FC<ContentDrapProps> = (
    {
        text, backgroundColor,
        isShowModal, isShowDrop,
        showModal, removeAndHiddenModal, hiddenModal
    }) => {

    const [activeDisplay, setActiveDisplay] = useState<boolean>(true);
    const [isHiddenIcons, setHiddenIcons] = useState<boolean>(true);
    const [divStyleBorder, setDivStyleBorder] = useState<React.CSSProperties>({})

    const { backgroundInput } = useContext(EditorBtnsContext);

    const handleDisplayItemAndOnpenStyle = () => {
        setActiveDisplay(!activeDisplay);
        const newStyle = {            
            border: "1px solid " + "red",
            height: "100%"
        }
        setDivStyleBorder(newStyle);
    }

    const handleLeave = () => {
        setHiddenIcons(true);

    }

    const handleHover = () => {
        setHiddenIcons(false);
    }
    return (
        <div>
            {!isShowDrop ?
                <div className='wrapper'
                    style={{ background: backgroundColor } }
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}>
                    <div className="contentDrap" style={divStyleBorder}>
                        {activeDisplay ?
                            <a href='#' className='styleHref' onClick={handleDisplayItemAndOnpenStyle}>
                                {text}
                            </a> :
                            <input style={{ background: backgroundInput }} className='stylebuttoon' type="text" defaultValue={text}></input>
                        }
                    </div>
                    <div className={isHiddenIcons ? "hidden-div" : ""} onClick={showModal}>
                        <img className='imge-rac' width={30} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHYSURBVHgB7ZtPTsJAFId/rxhj4sYjcAIpK10aLoBHKPh3yQlUuIC6U6I4W3Z4AuMFtDeQI7jRGAXGeY3EhogRaBv7Zj7SZtph8+XNm05m8ggTBMHuFoi2TbNqriLySQgy16jQVOqiH++gcSMIGmvwXo+hdQOSIDrF6L2llHqOHvkWydLLnWn6kMkj9EeFpb3okSMrV5Ypw1s+4gYFwWERNHyCfLRJ14oHGpzADkz6UpWHdAm2QGBhkpy7kxQ9WIYTlo4Tlo51wktImZtO+8//1VqjvnOANHERTotafX9qHxGhc32JLLAuwhTU9jQWYJYcXZQEcly7CM/LONK/5eqsjHM7wdnbvgg7Yek4YelkJsyz+E/fbH6X1SqLcRGWjhOWjhOWjhOWjhOWjhOWTmbbtLxNM8v7tMhMeNqeVNonDZO4HJZO4kOat1b/M4kLZ7l7MQ+JCWc9285LYicPOcGdPIjHCUvHCUuHhfuwh9CDHt3CFjQLg3qwA7PAKrQKYfjQ9/3ymln1b0Iu2vzOlWp3vyatYRNc6iITXjobt1V2RIFvYRi++f561wzvFRPpDcQKuHJOFFkjW1fq7LtQK05U1oMB1zGVjHw+6yF09OUxk7HuKXV1H+/6BGe3iK7jCS5CAAAAAElFTkSuQmCC" alt="" />
                    </div>
                </div> :
                ""
            }

            {isShowModal ?
                <Modal
                    removeAndHiddenFormContent={removeAndHiddenModal}
                    isOpen={isShowModal}
                    hiddenModal={hiddenModal} /> :
                ""}
        </div >
    )
}

export default ContentDrop;