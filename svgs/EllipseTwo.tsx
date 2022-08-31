import { SVGProps } from "react";

export default function EllipseTwo(
  props: SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      {...props}
      width="43"
      height="16"
      viewBox="0 0 43 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="29.8307"
        cy="6.66419"
        rx="12.2748"
        ry="5.4502"
        transform="rotate(-5.80693 29.8307 6.66419)"
        fill="white"
      />
      <ellipse
        cx="7.38345"
        cy="11.3319"
        rx="6.84669"
        ry="3.35037"
        transform="rotate(-11.688 7.38345 11.3319)"
        fill="white"
      />
    </svg>
  );
}
