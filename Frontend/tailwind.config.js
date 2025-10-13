/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(0, 150, 255, 0.4)" },
          "50%": { boxShadow: "0 0 25px rgba(0, 150, 255, 0.7)" },
        },
      },
      animation: {
        blob: "blob 8s infinite ease-in-out",
        "fade-in-up": "fade-in-up 0.8s ease-out both",
        "fade-in-down": "fade-in-down 0.8s ease-out both",
        glow: "pulseGlow 2.5s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
