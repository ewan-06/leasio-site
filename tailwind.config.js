/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./guides/*.html"],
  theme: {
    extend: {
      colors: {
        white: "var(--color-surface)", // Replaces bg-white, text-white, border-white
        blue: {
          50: "color-mix(in srgb, var(--color-primary) 8%, var(--color-surface))",
          100: "color-mix(in srgb, var(--color-primary) 16%, var(--color-surface))",
          200: "color-mix(in srgb, var(--color-primary) 30%, var(--color-surface))",
          300: "color-mix(in srgb, var(--color-primary) 48%, var(--color-surface))",
          400: "color-mix(in srgb, var(--color-primary) 70%, var(--color-surface))",
          500: "color-mix(in srgb, var(--color-primary) 88%, var(--color-surface))",
          600: "var(--color-primary)", // Main Royal Blue replacement
          700: "color-mix(in srgb, var(--color-primary) 85%, #000000)", // Hover state
          800: "color-mix(in srgb, var(--color-primary) 72%, #000000)",
          900: "color-mix(in srgb, var(--color-primary) 58%, #000000)",
        },
        slate: {
          50: "color-mix(in srgb, var(--color-neutral) 5%, var(--color-surface))",
          100: "color-mix(in srgb, var(--color-neutral) 10%, var(--color-surface))",
          200: "color-mix(in srgb, var(--color-neutral) 18%, var(--color-surface))",
          300: "color-mix(in srgb, var(--color-neutral) 32%, var(--color-surface))",
          400: "color-mix(in srgb, var(--color-neutral) 50%, var(--color-surface))",
          500: "color-mix(in srgb, var(--color-neutral) 68%, var(--color-surface))",
          600: "color-mix(in srgb, var(--color-neutral) 80%, var(--color-surface))",
          700: "color-mix(in srgb, var(--color-neutral) 90%, var(--color-surface))",
          800: "color-mix(in srgb, var(--color-neutral) 95%, #000000)",
          900: "var(--color-neutral)", // Main Slate replacement
        },
      },
    },
  },
};
