
import React from 'react';

//importing typewriter-effect
import Typewriter from "typewriter-effect";

function TypeWriter() {
    return (
        <div className="fadein typewriter">
            <Typewriter

                onInit={(typewriter) => {
                    typewriter
                        .typeString("Développeur React")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("Développeur MVP")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("Développeur Web3")
                        .pauseFor(1500)
                        .deleteAll()
                        .start();
                }}

                options={{
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>
    );
}

export default TypeWriter;
