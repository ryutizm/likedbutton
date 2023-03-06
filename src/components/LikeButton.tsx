import { useState } from "react";
import "./LikeButton.css";

const LikeButton = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <span className="likeButton" onClick={handleClick}>💛{count}</span>
    );
};

export default LikeButton;