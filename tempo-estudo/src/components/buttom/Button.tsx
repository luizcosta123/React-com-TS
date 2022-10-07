import React, { Component } from 'react';
import style from "./Button.module.scss";

class Button extends Component <{
    children: React.ReactNode,
    type?: "button" | "reset" | "submit" | undefined
}> {

    render() {
        const {type = "button"} = this.props;
        return(
            <button type={this.props.type} className={style.botao}>
                {this.props.children}
            </button>
        );
    }
    
}

export default Button;