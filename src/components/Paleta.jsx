import React from "react";
import uuid from "react-uuid";
import styles from "./Paleta.module.css";

const Paleta = ({ cssFileName, colors }) => {
  const totalColors = colors.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className={styles.containerPaleta}>
      <p className={styles.cssFileName}>{cssFileName}</p>
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
      {colors.length === 0 && <small>Sin colores</small>}
    </div>
  );
};

export default Paleta;
