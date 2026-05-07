import type { SVGProps } from "react";

const Expressjs = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 100" {...props}>
    <text
      x="50%"
      y="65%"
      textAnchor="middle"
      fontSize="70"
      fontWeight="bold"
      fontFamily="Arial, Helvetica, sans-serif"
      fill="#ffffff"
    >
      ex
    </text>
  </svg>
);

export { Expressjs };