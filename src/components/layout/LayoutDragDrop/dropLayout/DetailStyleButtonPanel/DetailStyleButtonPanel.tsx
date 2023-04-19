import React, { useContext, useState } from "react";
import { EditorBtnsContext } from "../../LayoutDragDrop";
import './DetailStyleButtonPanel.css';
import TextDescription from "./TextDecriptionDetailButton/TextDescription";

export interface SectionbackgroupDetail {
    id: number
    title: string
}

const DEFAULT_DETAIL_PANEL: SectionbackgroupDetail[] = [
    {
        id: 1,
        title: "없음"
    },
    {
        id: 2,
        title: "얇게"
    },
    {
        id: 3,
        title: "보통"
    },
    {
        id: 4,
        title: "굵게"
    }
]

const DetailStyleButtonPanel: React.FC = () => {
    const { backgroundInput, setBackgroundInput, colorBorder, setColorBorder } = useContext(EditorBtnsContext);

    const [btnsOptions, _setBtnsOptiobs] = useState<SectionbackgroupDetail[]>(DEFAULT_DETAIL_PANEL)

    const handlerId = (id: number) => {
        console.log('zoooo')
        console.log('id',id);
    }

    return (
        <div className="styleButtonDetail">
            <TextDescription
                title="이렇게 사용하세요. 💁‍♂️"
                shortContentOne="웹에서 보기 상자에는 웹에서 이메일 콘텐츠에 접근할 수 있는 공유용 URL 링크가 삽입되어있습니다."
                shortContentSecond="이메일이 제대로 표시되지 않을 때 웹에서 콘텐츠를 확인하도록 유도할 수 있습니다."
            />

            <div className="wrapper-backgroundProps">
                <div className="setBackgroup-div">
                    <label>배경 색상</label>
                    <div className="wrapper-input">
                        <input className="background-item" type="color" defaultValue={backgroundInput} onChange={(e) => setBackgroundInput(e.target.value)} />
                    </div>
                </div>
                <div className="setBackgroup-body">
                    <div>
                        <label>배경 테두리</label>
                    </div>
                    <div className="wrapper-style-border">
                        <select className="optionBorder">
                            {btnsOptions.map((btnsOptions: SectionbackgroupDetail, index: number) =>
                                <option
                                    key={index}
                                    onClick={() => handlerId(btnsOptions.id)}
                                    defaultValue={btnsOptions.id}>
                                    {btnsOptions.title}
                                </option>
                            )}
                        </select>
                        <input className="colorItem" type="color" defaultValue={colorBorder} onChange={(e) => setColorBorder(e.target.value)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default DetailStyleButtonPanel;