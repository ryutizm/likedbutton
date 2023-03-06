import { useState } from "react";
import "./LikeButton.css";

const LikeButton = () => {
    const [count, setCount] = useState(0);
    const handleClick_plus = () => {
        setCount(count + 1);
    };
    const handleClick_minus = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <span className="likeButton-plus" onClick={handleClick_plus}>+</span>
            <span className="count">💛{count}</span>
            <span className="likeButton-minus" onClick={handleClick_minus}>-</span>
        </div>
    );
};

export default LikeButton;