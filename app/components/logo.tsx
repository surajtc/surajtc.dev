import { SVGProps } from "react";

function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#fff"
      height={64}
      width={64}
      viewBox="0 0 64 64"
      {...props}
    >
      <path d="M24.32 0H0c0 11.73 7.696 22.187 17.067 27.733C30.187 35.5 39.68 47.671 39.68 64H64c0-11.73-7.695-22.187-17.067-27.733C33.813 28.495 24.32 16.329 24.32 0Z" />
      <path d="M0 64V32c17.673 0 32 14.327 32 32H0ZM32 0c0 17.673 14.327 32 32 32V0H32Z" />
    </svg>
  );
}

export default Logo;
