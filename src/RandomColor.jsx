import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { hexData } from "./constants/colorData";
import "./index.scss";

export default function RandomColor() {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    colorType === "hex" ? createHexColor() : createRGBColor();
  }, [colorType]);

  const setColorTypeTitle = () => {
    return colorType === "hex" ? `${colorType}: ` : "";
  };

  const randomColorElement = (length) => {
    return Math.floor(Math.random() * length);
  };

  const createHexColor = () => {
    let hex = "#";

    for (let i = 0; i < 6; i++) {
      hex += hexData[randomColorElement(hexData.length)];
    }
    setColor(hex);
  };

  const createRGBColor = () => {
    const r = randomColorElement(256);
    const g = randomColorElement(256);
    const b = randomColorElement(256);

    setColor(`rgb(${r},${g},${b})`);
  };

  return (
    <div className="main-container" style={{background: color}}>
      <div className="buttons">
        <button className="btn" onClick={() => setColorType('hex')}>
          Create HEX Color
        </button>
        <button className="btn" onClick={() => setColorType('rgb')}>
          Create RGB Color
        </button>
        <button
          className="btn"
          onClick={
            colorType === 'hex'
              ? () => createHexColor()
              : () => createRGBColor()
          }
        >
          Generate Random Color
        </button>
      </div>
      <div className="title">
        {
          <>
            <h1 className="colorcolorType">{setColorTypeTitle()}</h1>
            <h2 className="colorValue">{color}</h2>
          </>
        }
      </div>
    </div>
  );
}