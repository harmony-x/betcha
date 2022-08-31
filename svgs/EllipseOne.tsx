import { SVGProps } from "react";

export default function EllipseOne(
  props: SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      width="17"
      height="6"
      viewBox="0 0 17 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ellipse
        rx="4.50849"
        ry="2.00183"
        transform="matrix(-0.994868 -0.101177 -0.101177 0.994868 5.421 2.53638)"
        fill="white"
      />
      <ellipse
        rx="2.51476"
        ry="1.23058"
        transform="matrix(-0.979265 -0.202583 -0.202583 0.979265 13.666 4.25079)"
        fill="white"
      />
    </svg>
  );
}
