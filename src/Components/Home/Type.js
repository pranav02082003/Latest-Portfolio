import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <div>
            <h1 style={{ color: 'yellow', fontSize: '2rem' }}>
                <Typewriter
                    options={{
                        strings: [
                            "I'M PRANAV"
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                    }}
                />
            </h1>
        </div>
    );
}

export default Type;
