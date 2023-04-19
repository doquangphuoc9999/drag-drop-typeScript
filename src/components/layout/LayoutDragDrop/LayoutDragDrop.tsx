import { Box } from "@mui/material";
import React, { useState } from "react";
import Menu from "../../menu/Menu";
import { EditorItemData } from "./dragLayout/EditorItem/EditorItem";
import MainEditor from "./dragLayout/MainEditor";
import ContentDrop, { ContentDrapProps } from "./dropLayout/contentDrop/ContentDropForm";
import { EditorButtonData } from "./dropLayout/EditorButton/EditorButton";
import SideBar from "./dropLayout/SideBar";
import './styles/LayoutDragDrop.css';



const DEFAULT_EDITOR_BUTTONS: EditorButtonData[] = [{
    id: 1,
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAACICAYAAAC4PER8AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALxSURBVHgB7d0xTlRBAMfhwRAasZAeLJAW3QRdY6IX0AQvYKEH08ILSKInICauEiG0QIM9FmIhFiuzCeS/Cyb7KMzy9vsakteR7G9n5s1OZqZ/qgBV/0YBzgkCgiAgCAKCICAIAoIgIAgCgiAgCAKCICAIAoIgIAgCgiAgCAKCICAIAoIgIAgCgiAgCAKCICAIAoIgIAgCgiAgCAKCICAIAoIgIAgCgiAgCAKCICAIAoIgIAgCgiAgCAKCICAIAoIgIAgCgiAgzBYu+Hn8q2xufipHRz/KyclJaZulpcXS7T4ot+ZvFobN9E8VztUYNjY+tDKENDc3V9bXn4tiWN+UaUSv97X1MVT1f6yjIMMEMeLw8HuZFnVKyDBriDGtrCyX7sO1wTfrt+3dsr9/cKXnk2QaRsKmjBBj6txfHcy75+fny6Pu2pWfM9kEMab64T7z++TPlZ8z2QQxps+9rcEbqPrh3tneufJzJpvXriPevH1XpsnrVy8L57x2hSQICIKAYB/iH9o+t562tdK4jBAQBAFBEBAEAUEQEAQBQRAQBAFBEBDsVDe0t3dQel+2Jv60WT2Y1OmslpW7y4XxGSEa2t7ZvRZHL4+Pj0uvt1VoRhANXadzyHlqj/EIoqFud20wHZl0NYZO516hGWuIhuqc3Ly8vYwQEAQBQRAQrCEasg/RbkaIhuxDtJsgGrIP0W6CaMg+RLtZQzRkH6LdjBAQBAFBEBAEAUEQEAQx4uzdfZvvX6sXuXA5QYxYWLg9+Ht2A1Db5I1Gd5YWC8PcIDSi/uTh/cbHqbi4/cX6s2uxyfgf9QVxiRpFHSHaeGd1DaGOgk+fPBbDRYKA4I45SIKAIAgIgoAgCAiCgCAICIKAIAgIgoAgCAiCgCAICIKAIAgIgoAgCAiCgCAICIKAIAgIgoAgCAiCgCAICIKAIAgIgoAgCAiCgCAICIKAIAgIgoAgCAiCgCAICIKAIAgIgoAgCAiCgCAICIKAMFumU7/ARf2/TIXrjvSVPgsAAAAASUVORK5CYII=",
    name: "웹에서 보기"
}, {
    id: 2,
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAACICAYAAAC4PER8AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEhSURBVHgB7dnBbQIxEIbR2VSQFlIZEh2kg4QGoAIkKoMOoAKMkRDSzt4AgbV+72D5Oof/9EUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAY4ZgZLvdLUoMm/r9jnnbD1H+l8vFLrj7CkbqGP5i/mO4+qm3roMRg5goPYzhppyCEYPIyvm3PoeYvXKst64CAAAAAHgxpTpRqvumQyRKdd8MYkKp7plBZEo1AAAAAPAUpTpRqvumQyRKdd8MYkKp7plBZEo1AAAAAPAUpTppqFQryR+gQyQNlWol+QMMYqKlUq0kv5tBZM2UaiUZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKBNFxJeW/2qSmfJAAAAAElFTkSuQmCC",
    name: "텍스트"
}, {
    id: 3,
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAACICAYAAAC4PER8AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQTSURBVHgB7d1NchNHGAbgHongLM0JIt8AOAFOLkAuEFBYsYrJBfAJQnZU8eOxFVZsnFzAyglwTpCocgFYJJVI4Ol0y5iMLflHtgRCPM/CLkmlWemd/vrrVisEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODTVARGlGXZirFRxlBcTQ+Xw6KJYXsw2Pv+7t12L3CIQByRw1DF5m5YxCAc9nLQ37suFIddChyyVzUfFEVYjiFuNYtqrd1uvwoLotvthl6v19qLjfUiFLeWlhob6ekvA+80AoekMNzM/1/3q/VFCkO2uroabt++3UtBv5cfvy0JqRGIYyxqKVEUuUr+/CDoi14WTkwgoEYgoEYgoEYgoEYgoEYgoEYgoMZK9Xswsjcqhp8Hg717tk3MHyPEjB3sjUphuBEOFsLSavjlpebuw4dlKzBXBGLG8t6oMH5FeHlpqVEG5opAzNjB3qhx7CWaPwIxc/GkDYL2Es0ZgZixIjR+O+61GOIvgbkiEDNWFG/a40eJ+Op1v1oLzBWBmLF2u91rFNW1mFqt+8/EV2lk+HXQr66dp+0a04XKzc0rT8tOamB17gemyjrEe5BDkf59HS4oJSA82dxcbcRm/qZbq0p/nj7tfHHnzjffBqbCCPERGI4K5WaagDcfpDDspKda714sQntjo/MihcUEfQoEYs49f/48PH68ea2Kjd0qhrFzjhhCer35wkLfxQnEHHv27Fn46+9/1pqXmi9CfVQYbyWtfu8IxcUIxBzKp2OkEmhlMNjrxlg8mOCtw1A8elRa8DsngZgzeVTo9f78LpdAb/c/TWoljygbG1u3AhMTiCl6XJY30gexW5Y/TdwO3Z84l1fyqFDF4sdwsVXsIoVJW/YcBGIKcocnffhyB6ib7+pVjOv58QTvH7ZT06jw+zlHhXGKNAm/LxSTEYgLKsutXN78cbQDlB+nduipW7yPtFOn3TrNocjh/CFwJgJxTsPyqOzsnlTepHbo1TTJ7R4XinSN1ZPaqdOSrn8vlXI71ipOJxATyl/4SavD28PyKIazdHNa+ctAT550bh6+Tmd0kW2GUim2aq3idLZunNH+3fVSKo/iWlodnvROu1w0wnaabK+H8GYrhuZ2dbYwTduwLdvv//vVZ5ebgVECcQa5PEp31zLdZ1vhAvJkO80Xcnn0IUuXlRSGncBYAnGCd4cDxKl1frJ5qONbgbHMIY6R1xJy92iKbVA+AgJxjP3yhk+NQECNQECNQECNQECNQIyIC/VDi0xGII446RylReNcqFECccTx5ygtmvjydX//53n5n0AcMXqO0qIZngvVHfSr647jBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA48B/4zIonFHxlqAAAAABJRU5ErkJggg==",
    name: "이미지"
}, {
    id: 4,
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAACICAYAAAC4PER8AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALtSURBVHgB7dxBbhNXGMDx742R6BJuYPUCUE6Q5AQ5Acm0BYld2wNU3IAlEokypRygcALTE5AbMJwgLJs0nteZpJbGY5sWJBYZ/36reBnLf7/xvDdfBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwnVLwn46qaqdoJgftu7XTvpzGDZIineacT3MRb34sH74OPkkQn1BV1TTnosqRdmIc3l+cz/eePCnrYC1BbPDiRXV/cmsya/+8E+NyNr+c7z1+XJ4GKwSxRrcyNHnyLsYXw8JZu1I8sFKsKoIVbQxjXBn67t6+XZwEKwQxcHz8+37csB/OX6L7XXR09GonWCKIoSLvx3ZIRZEfBksEMVBEuhfb4vo2Mj2CGMgR92N7TIMlgoAeQayqY0ukyPYiBgQxkCP/GVsi5ySIAUEM5HnxW2yHnFJ+EyyxU73GycmrWbtS7MSo5fc/fH/wbbDECrFGSpdl+4H5GKOVzy7Om71ghSDWKMuynl82u+OMIp+1/5sTrxsIYoPuNGiRmu/aD1AdI9FeBs7aleGBk66b+Q3xPxwfV/tRFN2Rjnsp0k3buKvbEt42zfzlo0fl2wAAAAAAvjK3XdfojZ/pbrGO79nqHH9cXMx/sTm3ShADWzBxY8HkjTVuBUvmzeRZSnGn3dV9OUnNT2VZjub4xmw2i7qup/NcPG03GA/+nbzhTFOPoxsDbQxXQwb+Pm+ejimGzu7ubhweHtZt6D93r/PN23X/6gSxwVgvJVLqrpK/WYQ+9svCzyYI6BEE9AgCegQBPYKAHkFAjyCgRxDQIwjoEQT0CAJ6BLHiejhZVVWjPOfTnXiN+GsarCWIgRTF1RCvppk8e/68msaI5Jyj/vDhbhOTX69eh2HHQx4QGrh+QKh41741Iz8JejXf1QNCA1aIgW6uazfCsv0yfR2jlD8uRlqKAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABg4R82TuhDACLGJwAAAABJRU5ErkJggg==",
    name: "버튼"
}]

export interface DetailItemMenuProps {
    content: string
}
const DEFAULT_ITEM_MENU: DetailItemMenuProps[] = [
    {
        content: "주소록"
    },
    {
        content: "A/B 테스트"
    },
    {
        content: "발송정보"
    },
    {
        content: "템플릿"
    }
]


export interface EditorBtnContextProps {
    editorBtns: EditorButtonData[],
    onBtnClick: (id: number) => void,
    backgroundInput: string,
    setBackgroundInput: (backgroundInput: string) => void;
    dragStartHandler: (event: React.DragEvent<HTMLDivElement>, data: string) => void,
    dropHandler: (event: React.DragEvent<HTMLDivElement>) => void,
    allowDrop: (event: React.DragEvent<HTMLDivElement>) => void,
    contentDisplayText: (id: number) => void,
    colorBorder: string,
    setColorBorder: (colorBorder: string) => void
}

export const EditorBtnsContext = React.createContext<EditorBtnContextProps>({
    editorBtns: [],
    onBtnClick: (id: number) => {},
    backgroundInput: '',
    setBackgroundInput: () => {},
    dragStartHandler: () => {},
    dropHandler: () => {},
    allowDrop: () => {},
    contentDisplayText: (id: number) => {},
    colorBorder: '',
    setColorBorder: () => {}
});

const LayoutDragDrop: React.FC = () => {


    const [btns, _setBtns] = useState<EditorButtonData[]>(DEFAULT_EDITOR_BUTTONS);
    const [itemMenus, _setItemMenu] = useState<DetailItemMenuProps[]>(DEFAULT_ITEM_MENU)

    const [editorItems, setEditorItems] = useState<EditorItemData[]>([]);
    const [activeEditorItem, _setActiveEditorItem] = useState<string | null>(null);
    const [isShowModal, setIsShowModal] = useState<boolean>(false)

    const showModal = () => {
        setIsShowModal(true)
    }

    const modalShowHanler = () => {
        setIsShowModal(!isShowModal)
    }

    const handleEditorButtonClick = (id: number): void => {
        const clickedBtn: EditorButtonData = btns.filter(btn => btn.id == id)[0];
        const newEditorItem: EditorItemData = {
            typeId: clickedBtn.id,
            typeName: "Type_" + clickedBtn.name
        };

        setEditorItems([...editorItems, newEditorItem]);
    }

    // drag and drog
    const [ativeDrop, setActiveDrop] = useState<boolean>(true);

    const handleEditorItemClick = (): void => {
        setActiveDrop(!ativeDrop);
    }

    const dragStartHandler = (
        event: React.DragEvent<HTMLDivElement>,
        data: string
    ) => {
        event.dataTransfer.setData("text", data);
    };


    const handlerClickDisplayText = (id: number) => {
        
    }

     // remove form content
     const hiddenRemoveModal = () => {
        setActiveDrop(true);
        setIsShowModal(!isShowModal)
    }
    // This function will be triggered when dropping
    const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setActiveDrop(false);
    };

    // This makes the third box become droppable
    const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    // set data backgroupColor
    const [backgroundInput, setBackgroundInput] = useState('');
    const [colorBorder, setColorBorder] = useState('');

    return (
        <EditorBtnsContext.Provider value={{
            editorBtns: btns,
            onBtnClick: handleEditorButtonClick,
            backgroundInput,
            setBackgroundInput,
            dragStartHandler: dragStartHandler,
            dropHandler: dropHandler,
            allowDrop: allowDrop,
            contentDisplayText: handlerClickDisplayText,
            colorBorder,
            setColorBorder
        }}>
            <Box>
                <Menu items={itemMenus} />
                <div className="drapdropStyles">
                    <div className="dragStyle" >
                        <div className="contentStatus">
                            <ul className="listButtonStatus">
                                <li style={{ color: "#227ff9" }}>모든 변경 내용을 저장했습니다. 😀</li>
                                <li>
                                    <div className="listButtonReposive iconDesktop">
                                        <button className="buttonListReposive" style={{ background: "#ffd001" }}>
                                            <img width={18} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB+SURBVHgB7dZBCoAgEIXhV3SQOlndJDtp3WTSnbunQ9AU79tEIPjjIAjIxwxmtudvQgypBBkCGRHMVP8MGV5QTyncCSmIURCjIEZBjIIYBTEKYhTE6E3NlKADcfha8pSTcQkOumWPySPYzG9t3afnhGb4La0Le4Iu+J2Qv7oBdJh5Ccp5AEMAAAAASUVORK5CYII="></img>
                                        </button>
                                        <button className="buttonListReposive">
                                            <img width={18} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEJSURBVHgB7ZjBjcIwEEW/TQrYErId0MHKWhqgAugAWqAD6AD6AEV0QAe4BA4cg41HAiEhkW9khASad8hpYr38+DAzgNKNySlqmuYnoJoghnGMqPEc3li7tGgXzrkDK6ZCItOebGMM+ijBYNczwTEpC4IkUywjRPTbFlNWRoViCGO8iPTrRqymAqeWx+D/L+u+PWK92cbrWV3QhN6NCjFUiKFCDBViqBBDhRgqxFAhhgoxcnrqTlKvvMetV/ap9/5FAd+XUGki93xeQmkY82mgqi9zVSmeFfBROoQVXkTMOIsKVRXmsihAIWlrsjvKWaVCsq2QrUX6uhkyIr/HIHp599gLbpixjlEYZ4c7TR2JWAy1AAAAAElFTkSuQmCC"></img>
                                        </button>
                                    </div>
                                </li>
                                <li>이미지 업로드 가능 용량 </li>
                            </ul>
                        </div>
                        <MainEditor
                            items={editorItems}
                            handleItemClick={handleEditorItemClick}
                            content="cvaa"
                            isShowModal={isShowModal}
                            hiddenModal={modalShowHanler}
                            removeAndHiddenModal={hiddenRemoveModal}
                            showModal={showModal}
                        />
                        <div className="dropHere" onDragOver={allowDrop} onDrop={dropHandler}>
                            {
                                ativeDrop ?
                                    "" :
                                    <ContentDrop
                                        isShowDrop={ativeDrop}
                                        isShowModal={isShowModal}
                                        showModal={showModal}
                                        hiddenModal={modalShowHanler}
                                        backgroundColor={backgroundInput}
                                        text="이 메일이 잘 안보이시나요?"
                                        removeAndHiddenModal={hiddenRemoveModal} />
                            }
                        </div>
                    </div>
                    <div className="dropStyle">
                        <SideBar
                            typeName={activeEditorItem}
                        />
                    </div>
                </div>
            </Box>
        </EditorBtnsContext.Provider>
    )
}

export default LayoutDragDrop;