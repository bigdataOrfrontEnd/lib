import styles from "./button.module.css";
export const useButtonStyles = (type: string, size: string): string => {
  return `${styles[`button-${type}`]} ${styles[`button-${size}`]}`;
};
