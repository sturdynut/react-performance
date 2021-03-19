import { memo } from "react";
import { bool, number } from "prop-types";
import styles from "./styles.module.css";

export const Block = memo(({ isActive, value }) => {
  return (
    <div
      className={[styles.container, isActive ? styles.active : null]
        .filter(Boolean)
        .join(" ")}
    >
      {value}
    </div>
  );
});

Block.propTypes = {
  isActive: bool.isRequired,
  value: number.isRequired,
};
