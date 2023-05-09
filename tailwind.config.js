/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "linear-gradient(0deg, #91572B, #91572B)",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(126.75% 133.09% at 50% 49.99%, #DC8D48 0%, #D38745 4.19%, #91572B 36.95%, #5E3116 66.01%, #3F1A0A 87.87%, #331105 100%);",
        'table':
          "radial-gradient(173.43% 182.1% at 50% 49.99%, rgba(220, 141, 72, 0.3) 0%, rgba(211, 135, 69, 0.3) 4.19%, rgba(145, 87, 43, 0.3) 36.95%, rgba(94, 49, 22, 0.3) 66.01%, rgba(63, 26, 10, 0.3) 87.87%, rgba(51, 17, 5, 0.3) 100%)",
          'btn-bg':' linear-gradient(90.74deg, rgba(119, 67, 32, 0.15) 0.16%, rgba(232, 197, 128, 0.15) 100%)'
      },
    },
  },
  plugins: [require("daisyui")],
};
