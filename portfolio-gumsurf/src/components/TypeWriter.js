
import React from 'react';

//importing typewriter-effect
import Typewriter from "typewriter-effect";

function TypeWriter() {
    return (
        <div className="typewriter">
            <Typewriter

                onInit={(typewriter) => {
                    typewriter
                        .typeString("Développeur FrontEnd")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("Développeur BackEnd")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("Développeur FullStack")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("Désigner")
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
