import { useState } from 'react';
import './SizeButton.css';

const sizes = ["39", "40", "41", "42", "43"];

export default function ShoeSizeButtons() {
  const [selected, setSelected] = useState("");

  return (
    <div className="sizeSelector">
      <div className="sizeButton">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelected(size)}
            className={selected === size ? "selected" : ""}
          >
            {size}
          </button>
        ))}
      </div>

      {selected && (
        <div className="SizeShoesResp">
          <p>Tamanho selecionado: <span>{selected}</span></p>
        </div>
      )}
    </div>
  );
}
