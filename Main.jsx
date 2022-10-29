import React from "react";
import UnivDialog from "./UnivDialog";
import { Attribute } from "./Attribute";


function Main() {
    return(
        <div>
            {Attribute.map((items, index) => {
                return(
                    <UnivDialog
                        key = {index}
                        name={items.name} 
                        color={items.color}
                        text={items.text}
                        background={items.background}
                        imoge={items.imoge}
                        button={items.button}
                    >
                    </UnivDialog>
                )
            })}
        </div>
    )
}

export default Main