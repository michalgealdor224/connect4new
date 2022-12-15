import React from "react";
import Circle from "./Circle";

function Col (props) {
    return (
        <div>
            {
                props.circle.map((circle) => {
                        return (
                            <Circle circle={circle}/>
                        )
                    }
                )

            }
        </div>
    );
}
export default Col;