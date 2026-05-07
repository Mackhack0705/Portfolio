import type { SVGProps } from "react";

const AWS = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 120" {...props}>
    <text
      x="50%"
      y="55%"
      textAnchor="middle"
      fontSize="50"
      fontWeight="bold"
      fill="#ffffff"
    >
      aws
    </text>

    <path
      d="M40 80 C90 110, 170 110, 220 80"
      stroke="#FF9900"
      strokeWidth="10"
      fill="none"
      strokeLinecap="round"
    />
    <polygon points="210,70 235,80 210,90" fill="#FF9900" />
  </svg>
);

export { AWS };