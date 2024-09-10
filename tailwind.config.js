/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "large-desktop": "1800px", // 1800px
        // tl: "1200px", // tablet-landscape
        // tp: "900px", // tablet-portrait
        // sp: "300px", // small-phone
      },
      animation: {
        go: "go 0.3s cubic-bezier(1, 0, 0, 1) both",
        goBack: "goBack 0.3s cubic-bezier(1, 0, 0, 1) 0.6s both",
      },
      keyframes: {
        go: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(105%)" },
        },
      },
      gridTemplateColumns: {
        body: "8fr, 17fr",
        "body-tp": "10fr, 15fr",
        days: "repeat(auto-fit, minmax(13rem, 1fr))",
        // column: "",
      },
      gridTemplateRows: {
        highlight: "20.4rem, 15.9rem",
        body: "minmax(102.3rem, 100vh)",
        "body-tl": "minmax(max-content, 100vh)",
        "body-p": "minmax(100vh, max-content), max-content",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};