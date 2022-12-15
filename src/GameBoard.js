import React from "react";
import Col from "./Col";

function GameBoard (props) {
    return (
        <div>
            {
                props.col.map((col) => {
                        return (
                            <Col col={col}/>
                        )
                    }
                )

            }
        </div>
    );
}
export default GameBoard