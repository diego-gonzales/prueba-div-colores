import { useEffect } from "react";
import { useState } from "react";
import { hexToHCT } from "../../helpers/hexToHct";
import styles from "./ColorPicker.module.css";

const initialForm = {
  color: '#000000'
};

const ColorPicker = () => {
  const [hctColor, setHctColor] = useState(null);
  const [myForm, setMyForm] = useState(initialForm);

  const handleChangeInputColor = (event) => {
    setMyForm({
      ...myForm,
      [event.target.name]: event.target.value
    });

    const hct = hexToHCT(event.target.value);
    setHctColor(hct);
  };

  useEffect(() => {
    const hct = hexToHCT(myForm.color);
    setHctColor(hct);
  }, [])
  

  return (
    <>
      <h3>HCT Color picker</h3>
      <div>
        {myForm.color}
      </div>
      <form>
        <div>
          <input
            id="color-picker"
            type="color"
            name="color"
            onChange={handleChangeInputColor}
            className={styles.colorPicker}
            value={myForm.color}
          />
        </div>
      </form>
      {hctColor && (
        <div className={styles.colorValues}>
          <p>
            Hue: <span>{hctColor.hue}</span>
          </p>
          <p>
            Chroma: <span>{hctColor.chroma}</span>
          </p>
          <p>
            Tone: <span>{hctColor.tone}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default ColorPicker;
