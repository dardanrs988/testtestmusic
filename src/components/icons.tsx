import type { SVGProps } from "react";

export function KubernetesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2l-8.5 4.5v9l8.5 4.5 8.5-4.5v-9l-8.5-4.5z" />
      <path d="M12 2v20" />
      <path d="M3.5 6.5l17 9" />
      <path d="M20.5 6.5l-17 9" />
      <path d="M12 12l8.5-4.5" />
      <path d="M12 12l-8.5-4.5" />
      <path d="M12 12v9" />
    </svg>
  );
}

export function TerraformIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3.5 5.5l5 2.5v5l-5-2.5z" />
      <path d="M3.5 10.5l5 2.5v5l-5-2.5z" />
      <path d="M8.5 8l5-2.5v5l-5 2.5z" />
      <path d="M8.5 13l5-2.5v5l-5 2.5z" />
      <path d="M13.5 5.5l5 2.5v5l-5-2.5z" />
    </svg>
  );
}
