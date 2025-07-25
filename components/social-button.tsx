import React, { JSX } from "react";

interface SocialButtonProps {
  provider: "Google" | "Twitter";
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const providerStyles: Record<string, string> = {
  Google:
    "w-full flex items-center justify-center gap-3 px-4 py-2 bg-white text-gray-800 font-medium rounded-lg hover:bg-gray-50 transition-colors border border-gray-200",
  Twitter:
    "w-full flex items-center justify-center gap-3 px-4 py-2 bg-black text-white font-medium rounded-lg hover:bg-neutral-900 transition-colors border border-gray-800",
};

const providerIcons: Record<string, JSX.Element> = {
  Google: (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  ),
  Twitter: (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M20.792 8.667h2.937l-6.46 7.37 7.6 9.296h-5.96l-4.66-5.793-5.33 5.793H6.667l6.89-7.6-7.37-9.066h6.06l4.16 5.28 4.385-5.28zm-1.04 13.738h1.63l-4.91-6.13-1.52 1.7 4.8 6.13zm-7.45-10.07h-1.5l4.24 5.23 1.43-1.7-4.17-5.23z"
        fill="currentColor"
      />
    </svg>
  ),
};

export const SocialButton: React.FC<SocialButtonProps> = ({
  provider,
  onClick,
  children,
  className = "",
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`${providerStyles[provider]} ${className}`}
  >
    {providerIcons[provider]}
    {children}
  </button>
);
