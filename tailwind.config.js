/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Vazirmatn", "Montserrat", "sans-serif"],
      },
      colors: {
        pink: "#E5CFF7",
        black: "#100303",
        white: "#f7f7f7",
        purple: "#5B0888",
        blue: "#713ABE",
        yellow: "#FFBF00",
        lowPink: "#F2E8F7",
        lowYellow: "#FFE09C",
        lowBlack: "rgb(16 3 3 / 70%)",
        lowPurple: "#F2E8F7",
        tableHeader: "#E5CFF7",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/hero.png')",
      },
      boxShadow: {
        "book-shadow": "3px -2px 6px 0px black",
        main: "0 4.92px 15.75px rgba(0, 0, 0, 0.3)",
        card: "0px 0px 13px rgb(0 0 0 / 30%)",
        contactCard: "0px 0px 6px rgb(0 0 0 / 30%)",
        contactItem: "0px 0px 6px rgb(0 0 0 / 60%)",
        girlShadow: "0px 0px 10px #E5CFF7",
        boyShadow: "0px 0px 10px #FFE09C",
        coursePink: "-2px 1px 0px 2px #e5cff7",
        adminNavbar: "-1px 0 6px rgba(108,102,243,.2)",
        userSidebar: "0 0 15px rgb(77 20 81 / 50%)",
        userTopBoxes: "0 5px 15px rgb(77 20 81 / 50%)",
        userTable: "0 0 15px rgb(77 20 81 / 15%)",
        userProf: "0 0 6px black",
        contactForm: "0 5px 17px rgb(147 0 183 / 20%)",
      },
    },
    screens: {
      yellowTop: { max: "1160px" },
      sumComment: { max: "1100px" },
      navbar: { max: "860px" },
      tips: { max: "780px" },
      userSummary: { max: "950px" },
      landing: { max: "650px" },
      hero: { max: "700px" },
      subHero: { max: "535px" },
      tips2: { max: "430px" },
      books: { max: "385px" },
    },
    keyframes: {
      jump765: {
        "0%, 80%, 100%": { transform: "scale(0)" },
        "40%": { transform: "scale(2.0)" },
      },
    },
    animation: {
      jump765_dot1: "jump765 1.6s -0.32s linear infinite",
      jump765_dot2: "jump765 1.6s -0.16s linear infinite",
      jump765_dot3: "jump765 1.6s linear infinite",
    },
  },
  plugins: [],
};
