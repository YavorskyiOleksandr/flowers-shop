import React, { useRef, useEffect } from "react";
import './jumbotron.css';

export const Jumbotron = () => {
    const jumbotronRef = useRef(null);

    useEffect(() => {
        const jumbotron = jumbotronRef.current;

        function moveImage(event) {
            const { clientX, clientY } = event;
            const { left, top, width, height } = jumbotron.getBoundingClientRect();
            const xOffset = (clientX - left - width / 2) / width;
            const yOffset = (clientY - top - height / 2) / height;
            jumbotron.style.backgroundPositionX = `${50 + xOffset * 20}%`;
            jumbotron.style.backgroundPositionY = `${50 + yOffset * 20}%`;
        }

        jumbotron.addEventListener("mousemove", moveImage);

        return () => {
            jumbotron.removeEventListener("mousemove", moveImage);
        };
    }, []);

    return (
        <div className="jumbotron" ref={jumbotronRef}>
            <h2>Створи свій неповторний сад</h2>
            <span className="jumbotron__describe"> Втілюйте в життя різноманітні ідеї щодо покращення свого саду разом з нами</span>
        </div>
    )
}

