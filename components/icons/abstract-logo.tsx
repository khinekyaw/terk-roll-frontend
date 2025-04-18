import { type SVGProps } from "react";

type IProps = SVGProps<SVGSVGElement>

export const AbstractLogo = (props: IProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="65"
      height="108"
      fill="none"
      viewBox="0 0 65 108"
      {...props}
    >
      <g strokeLinejoin="bevel" strokeWidth="8">
        <path stroke="#612CFE" d="M61 11.298v91.404H11V59.798h32v24.716H26.5" />
        <path stroke="#2CA6E7" d="M54 5.298v91.404H4V53.798h32v24.716H19.5" />
        <path stroke="#000" d="M57 7.163v91.404H7V55.664h32V80.38H22.5" />
      </g>
    </svg>
  );
};
