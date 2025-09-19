module.exports = {
  theme: {
    extend: {
      keyframes: {
        "fade-in-left": {
          "0%": { opacity: 0, transform: "translateX(-40px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: 0, transform: "translateX(40px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseScale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        "fade-in-left": "fade-in-left 1s ease-out forwards",
        "fade-in-right": "fade-in-right 1s ease-out forwards",
        float: "float 4s ease-in-out infinite",
        "pulse-scale": "pulseScale 3s ease-in-out infinite",
      },
    },
  },
};
