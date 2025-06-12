import { useState } from "react";
import "./ColorButtons.css";

export default function ColorButtons() {
    const [selectedColor, setSelectedColor] = useState(null);
    const colorShoes = ["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"];

    return (
        <div className="colorContainers">
            {colorShoes.map((color, index) => (
                <div
                    key={index}
                    className={`circleColor ${selectedColor === color ? "selected" : ""}`}
                    style={{ backgroundColor: color }}
                    onClick={() =>
                        setSelectedColor(selectedColor === color ? null : color)
                    }
                />
            ))}
        </div>
    );
}
