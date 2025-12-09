// Logo component - Your custom brand logo with glow effect
export function Logo({ className = "w-full h-full" }) {
  return (
    <svg
      viewBox="0 0 104.22 114.69"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Glow filter for the logo */}
        <filter id="logo-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feFlood floodColor="#ea6faa" floodOpacity="0.75" />
          <feComposite in2="blur" operator="in" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g filter="url(#logo-glow)">
        {/* Top arrow shape */}
        <path
          fill="#ea6faa"
          d="M52.64.76L.88,47.8s-.43,22.81,0,22.81S52.64,23.81,52.64,23.81l50.89,46.8v-20.93L52.64.76Z"
        />
        {/* Bottom arrow shape */}
        <path
          fill="#ea6faa"
          d="M39.28,56.24L.88,91.12s-.43,22.81,0,22.81,51.75-46.8,51.75-46.8l50.89,46.8v-20.93l-38.55-36.9-25.7.15Z"
        />
        {/* Center dot */}
        <ellipse
          fill="#ea6faa"
          cx="52.11"
          cy="42.09"
          rx="4.4"
          ry="4.81"
        />
      </g>
    </svg>
  );
}
