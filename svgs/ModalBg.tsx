import { SVGProps } from "react";

export default function ModalBg(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      width="721"
      height="442"
      viewBox="0 0 721 442"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="721" height="442" rx="44" fill="#FEF2EA" />
      <rect
        width="678.523"
        height="415.154"
        rx="44"
        transform="matrix(0.999934 0.0115153 0.0263484 0.999653 10.9741 9.35449)"
        fill="#F95C08"
      />
      <rect
        x="17.5586"
        y="9.64795"
        width="688.078"
        height="417.579"
        rx="44"
        fill="url(#paint0_linear_150_368)"
      />
      <ellipse
        rx="13.4799"
        ry="6.3691"
        transform="matrix(0.99418 -0.107731 0.0950132 0.995476 76.633 33.518)"
        fill="white"
      />
      <ellipse
        rx="7.53448"
        ry="3.90804"
        transform="matrix(0.976557 -0.215259 0.190593 0.981669 51.9992 38.9758)"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_150_368"
          x1="34.9716"
          y1="9.64789"
          x2="735.614"
          y2="103.75"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FEB92F" />
          <stop offset="1" stopColor="#FA8841" />
        </linearGradient>
      </defs>
    </svg>
  );
}
