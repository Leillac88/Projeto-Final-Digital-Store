import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Stars() {
  const [rating, setRating] = useState(4);
  const [hovered, setHovered] = useState(null);

  const starStyle = {
    cursor: "pointer",
    marginRight: "5px",
    transition: "color 0.2s",
  };

  return (
    <div style={{ display: "flex" }}>
      {Array.from({ length: 5 }, (_, i) => {
        const value = i + 1;
        const isActive = value <= (hovered ?? rating);
        return (
          <FaStar
            key={value}
            size={20}
            color={isActive ? "#ffc107" : "#e4e5e9"}
            style={starStyle}
            onClick={() => setRating(value)}
            onMouseEnter={() => setHovered(value)}
            onMouseLeave={() => setHovered(null)}
          />
        );
      })}
    </div>
  );
}
