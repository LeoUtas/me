import React, { useState, useEffect } from "react";

const TypingEffect = () => {
    const text =
        "A graduate student @ Memorial University of Newfoundland and a data enthusiast passionating about applied quantitative analyses.";
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentText, setCurrentText] = useState("");

    useEffect(() => {
        let timeoutId;

        if (!isDeleting && index < text.length) {
            timeoutId = setTimeout(() => {
                setCurrentText(currentText + text.charAt(index));
                setIndex(index + 1);
            }, 118); // Typing speed
        } else if (isDeleting && index > 0) {
            timeoutId = setTimeout(() => {
                setCurrentText(text.substring(0, index - 1));
                setIndex(index - 1);
            }, 180); // Erasing speed
        } else if (isDeleting) {
            setIsDeleting(false);
            timeoutId = setTimeout(() => setIndex(0), 1000); // Delay before retyping
        } else {
            setIsDeleting(true);
            timeoutId = setTimeout(() => setIndex(index - 1), 2000); // Delay before erasing
        }

        return () => clearTimeout(timeoutId);
    }, [index, isDeleting, currentText]);

    return <div id="typing-text">{currentText}</div>;
};

export default TypingEffect;
