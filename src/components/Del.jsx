import React, { useState } from "react";

const Del = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <button
                onClick={() => {
                    setCounter(counter + 1);
                }}
            >
                increment
            </button>
            <button
                onClick={() => {
                    setCounter(counter - 1);
                }}
            >
                decrement
            </button>

            <br></br>

            <p>{counter}</p>
        </div>
    );
};

export default Del;
