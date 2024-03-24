/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Raleway", "sans-serif"],
            },
            colors: {
              "blue-light-1":"#81C3D7",
              "blue-light-2": "#3A7CA5",
              "blue-neutral": "#2F6690",
              "blue-dark": "#16425B",
              "beige-1": "#ebede9",
            }
        },
    },
    plugins: [],
};
