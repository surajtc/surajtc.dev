import { SVGProps } from "react";

function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="245"
      height="357"
      viewBox="0 0 245 357"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M241.755 31.0925C182.949 -13.8861 98.4836 -9.48355 44.7 44.3001C-9.08367 98.0837 -13.4862 182.549 31.4924 241.355L241.755 31.0925ZM213.471 115.945L3.20815 326.208C62.0147 371.187 146.48 366.784 200.263 313.001C254.047 259.217 258.45 174.752 213.471 115.945Z"
      />
    </svg>
  );
}

export default Logo;
