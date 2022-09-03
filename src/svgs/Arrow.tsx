import { FC } from "react";

interface IArrowSvg {
  color?: string;
  rotate?: number;
  opacity?: number;
}

export const ArrowSvg: FC<IArrowSvg> = ({
  color = "black",
  rotate = 0,
  opacity = 1,
}) => {
  return (
    <svg
      transform={`rotate(${rotate} 0 0)`}
      width="11"
      height="6"
      viewBox="0 0 11 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.92857 0.143136L5.5 3.71456L9.07143 0.143136L10.5 0.857422L5.5 5.85742L0.5 0.857422L1.92857 0.143136Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};
