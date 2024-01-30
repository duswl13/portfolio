import { ReactNode } from "react";

interface Props {
  width: number;
  height: number;
  className: string;
  fill?: string;
  children: ReactNode;
}

export default function SvgIcon({
  width,
  height,
  className,
  fill = "currentColor",
  children,
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      className={`bi ${className}`}
      viewBox="0 0 16 16"
    >
      {children}
    </svg>
  );
}
