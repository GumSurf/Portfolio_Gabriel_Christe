
import React from 'react';

//importing typewriter-effect
import Typewriter from "typewriter-effect";

function TypeWriter() {
    return (
        <div className="typewriter">
            <Typewriter

                onInit={(typewriter) => {
                    typewriter
                        .typeString("Développeur Front End")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("Développeur Back End")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("Développeur Full Stack")
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
