module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Orange: "hsl(26, 100%, 55%)",
        "Pale-orange": "hsl(25, 100%, 94%)",
        Black: "hsl(0, 0%, 0%)",
        White: "hsl(0, 0%, 100%)",
        "Light-grayish-blue": "hsl(223, 64%, 98%)",
        "Grayish-blue": "hsl(220, 14%, 75%)",
        "Dark-grayish-blue": "hsl(219, 9%, 45%)",
        "Very-vark-blue": "hsl(220, 13%, 13%)",
      },
    },
    fontFamily: {
      "Kumbh-Sans": ["Kumbh Sans", "sans-serif"],
    },
    screens: {
      tablet: "768px",
      laptop: "1024px",
    },
  },
  plugins: [],
};
