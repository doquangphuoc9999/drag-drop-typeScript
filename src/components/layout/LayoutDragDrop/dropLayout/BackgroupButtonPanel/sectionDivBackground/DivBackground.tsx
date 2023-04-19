import React, { useContext, useState } from "react";
import { EditorBtnsContext } from "../../../LayoutDragDrop";
import { SectionbackgroupDetail } from "../../DetailStyleButtonPanel/DetailStyleButtonPanel";
import './DivBackground.css';

export interface sectionDivBackgroundProps {
    itemData: SectionbackgroupDetail
}

const DivBackground: React.FC<sectionDivBackgroundProps> = ({ itemData }) => {


    const { backgroundInput, setBackgroundInput } = useContext(EditorBtnsContext);

    return (
        <div className="wrapper-backgroundProps">
            <label>{itemData.title}</label>
            <div className="detailButton">
                {/* {undefined === itemData.backgroundBorder ? "" :
                    <div>
                        <select className="optionBorder">
                            <option defaultValue="volvo">없음</option>
                            <option defaultValue="saab">얇게</option>
                            <option defaultValue="vw">보통</option>
                            <option defaultValue="audi">굵게</option>
                        </select>
                    </div>
                } */}
                <div>
                    <input type="color" defaultValue={backgroundInput} onChange={(e) => setBackgroundInput(e.target.value)} />
                </div>
            </div>
        </div>
    )
}

export default DivBackground;