import { ReactNode, MouseEvent } from "react";
import buttonStyles from "./PointButton.module.css";

interface Props {
  className?: string;
  id?: string;
  children?: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ className, id, children, onClick }: Props) {
  return (
    <button
      className={`btn btn-primary btn-lg back-gradient  ${
        buttonStyles.button
      } ${className || ""}`}
      id={id}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
