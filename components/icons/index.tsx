export type IconProps = Omit<React.SVGProps<SVGSVGElement>, "children"> & {
  size?: number;
};

export const Logo = {
  Bluesky: ({
    size = 24,
    stroke = "currentColor",
    focusable = "false",
    ...props
  }: IconProps) => (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-1 -1 26 26"
      height={size}
      width={size}
      focusable={focusable}
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2"
      stroke={stroke}
      {...props}
    >
      <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
    </svg>
  ),
  X: ({
    size = 24,
    stroke = "currentColor",
    focusable = "false",
    ...props
  }: IconProps) => (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={size}
      width={size}
      focusable={focusable}
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2"
      fill={stroke}
      {...props}
    >
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  ),
  Github: ({
    size = 24,
    stroke = "currentColor",
    focusable = "false",
    ...props
  }: IconProps) => (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      focusable={focusable}
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2"
      stroke={stroke}
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  ),
};
