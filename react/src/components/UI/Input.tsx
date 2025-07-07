import { forwardRef } from "react";

interface Props {
    type: string;
    label: string;
    name: string
}


export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
    return (
        <div>
            <label>{props.label}</label><br />
            <input type={props.type} ref={ref} name={props.name} />
        </div>
    )
});