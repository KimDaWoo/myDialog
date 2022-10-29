import React from "react";
import './UnivDialog.css';

function UnivDialog (props) {
    return(
        <div className="main" style={{background: props.background}}>
            <header>
                <h2 style={{color: props.color, display: "inline-block", paddingLeft: "2rem"}}>{props.name}</h2>
                <h4>{props.imoge}</h4>
            </header>
            <hr />
            <h3 style={{paddingLeft: "2.3rem"}}>{props.text}</h3>
                {props.button && 
                    <div style={{textAlign: "center"}}>
                        <button>{props.button}</button>
                    </div>
                }
        </div>
    )
}

export default UnivDialog