import { SVGProps } from "react";

export default function InfoIcon(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_i_87_82)">
        <path
          d="M0 32C0 49.6731 14.3269 64 32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32Z"
          fill="#FEF2EA"
        />
        <path
          d="M5.83401 29.5162C5.83401 43.1673 17.5489 54.2337 32 54.2337C46.4511 54.2337 58.166 43.1673 58.166 29.5162C58.166 15.8652 46.4511 4.7988 32 4.7988C17.5489 4.7988 5.83401 15.8652 5.83401 29.5162Z"
          fill="#FDD868"
        />
        <path
          d="M8.23026 31.9999C8.23026 45.7893 19.4088 56.9678 33.1981 56.9678C46.9875 56.9678 58.166 45.7893 58.166 31.9999C58.166 18.2106 46.9875 7.03207 33.1981 7.03207C19.4088 7.03207 8.23026 18.2106 8.23026 31.9999Z"
          fill="url(#paint0_linear_87_82)"
        />
        <path
          d="M52.0917 37.5043L56.6579 39.2577L56.1065 40.6938L51.2824 38.8415L49.4706 34.9767L52.0917 37.5043Z"
          fill="#FB5F09"
        />
        <path
          d="M51.2993 38.8063L55.4527 40.4242L55.1548 41.1357L50.5845 39.2418L49.4693 34.9791L51.2993 38.8063Z"
          fill="#FFF0C6"
        />
        <path
          d="M23.9012 12.2402C23.4954 11.3491 22.3145 9.35806 20.8364 8.52341C20.8437 9.25518 21.4667 11.023 23.9012 12.2402Z"
          fill="#F76409"
        />
        <path
          d="M23.8819 12.2362C22.4613 11.5791 21.0259 9.14676 20.8622 8.90115C20.809 9.89635 22.6436 11.7462 23.8819 12.2362Z"
          fill="#FFF4C1"
        />
        <path
          d="M11.4608 20.7743C12.4946 21.6006 14.2786 21.0765 15.4456 19.6037C16.6125 18.1309 16.7204 16.2671 15.6866 15.4408C14.6528 14.6145 12.8688 15.1386 11.7019 16.6114C10.5349 18.0842 10.427 19.948 11.4608 20.7743Z"
          fill="white"
        />
        <path
          d="M15.3303 14.8129C15.5394 14.9961 16.0456 14.7559 16.461 14.2763C16.8764 13.7968 17.0436 13.2595 16.8345 13.0763C16.6254 12.8931 16.1192 13.1333 15.7038 13.6129C15.2884 14.0924 15.1212 14.6297 15.3303 14.8129Z"
          fill="white"
        />
        <path
          d="M35.677 16.8283C35.677 15.2428 34.3917 13.9575 32.8062 13.9575C31.2207 13.9575 29.9354 15.2428 29.9354 16.8283C29.9354 18.4138 31.2207 19.6991 32.8062 19.6991C34.3917 19.6991 35.677 18.4138 35.677 16.8283Z"
          fill="white"
        />
        <path
          d="M34.4386 22.2603C34.0866 20.4701 31.5259 20.4701 31.174 22.2603L27.2583 42.1776C27.0562 43.2054 27.843 44.162 28.8906 44.162H36.7219C37.7695 44.162 38.5563 43.2054 38.3542 42.1776L34.4386 22.2603Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_87_82"
          x="0"
          y="0"
          width="72"
          height="82"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="8" dy="18" />
          <feGaussianBlur stdDeviation="14.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.658333 0 0 0 0 0.639132 0 0 0 0 0.639132 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_87_82"
          />
        </filter>
        <linearGradient
          id="paint0_linear_87_82"
          x1="64"
          y1="2.28568"
          x2="4.68797"
          y2="64"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FEB830" />
          <stop offset="1" stopColor="#FB8D40" />
        </linearGradient>
      </defs>
    </svg>
  );
}
