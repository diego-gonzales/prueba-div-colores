import React from "react";
import uuid from "react-uuid";
import styles from "./Paleta.module.css";

const Paleta = ({ fileCssName, colors }) => {
  const totalColors = colors.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <h3>
        Archivo CSS: <span className={styles.cssFileName}>{fileCssName}</span>
      </h3>
      {colors &&
        colors.map((item) => (
          <div
            key={uuid()}
            style={{
              background: item.color,
              width: `${(item.quantity / totalColors) * 100}%`
            }}
            className={styles.containerColor}
          ></div>
        ))}
    </>
  );
};

export default Paleta;