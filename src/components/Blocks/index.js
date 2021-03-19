import { number } from "prop-types";
import { Block } from "../Block";
import { useRandomValue } from "../../hooks/useRandomValue";
import styles from "./styles.module.css";

const isActive = (value, target) => value % target === 0;

export const Blocks = ({ count }) => {
  const target = useRandomValue(15);

  return (
    <div className={styles.container}>
      {Array.from(new Array(count)).map((_, index) => {
        const value = index + 1;
        return (
          <Block key={value} value={value} isActive={isActive(value, target)} />
        );
      })}
    </div>
  );
};

Blocks.propTypes = {
  count: number.isRequired,
};
