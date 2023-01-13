/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    // 背景画像の設定
    backgroundImage: {
      "tutorial-bg": "url('../src/img/main-bg.jpg')",
    },
  },
  plugins: [],
};
