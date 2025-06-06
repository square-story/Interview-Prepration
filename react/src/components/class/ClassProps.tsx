import React from "react"

type ClassPropsType = {
    name: string;
};

export class ClassProps extends React.Component<ClassPropsType> {
    render(): React.ReactNode {
        return <p>HI {this.props.name}!</p>
    }
}