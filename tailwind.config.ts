import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["var(--font-syne)", "system-ui", "sans-serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        cyan: {
          400: "#00C9E0",
          500: "#00C9E0",
          600: "#00B5CC",
        },
        emerald: {
          400: "#3DDC84",
          500: "#3DDC84",
        },
      },
      backgroundColor: {
        black: "#000000",
        dark: "#060D14",
        "dark-secondary": "#0D1F2D",
      },
      borderColor: {
        cyan: {
          400: "rgba(0, 201, 224, 0.2)",
          500: "rgba(0, 201, 224, 0.2)",
        },
      },
      textColor: {
        muted: "rgba(255, 255, 255, 0.45)",
        "muted-mid": "rgba(255, 255, 255, 0.75)",
      },
      animation: {
        fadeUp: "fadeUp 0.9s ease both",
        fadeIn: "fadeIn 0.3s ease-out",
        fadeOut: "fadeOut 0.3s ease-out",
        marquee: "marquee 40s linear infinite",
        pulse: "pulse 2.2s ease infinite",
        spin: "spin 10s linear infinite",
      },
      keyframes: {
        fadeUp: {
          from: {
            opacity: "0",
            transform: "translateY(24px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeIn: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        fadeOut: {
          from: {
            opacity: "1",
          },
          to: {
            opacity: "0",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      zIndex: {
        100: "100",
      },
    },
  },
  plugins: [],
};

export default config;
