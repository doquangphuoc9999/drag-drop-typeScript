import { TypeLabel } from "./types/TypeLabel";

const Label = (props: TypeLabel) => {
    return (
        <label>{props.text}</label>
    )
}

export default Label;