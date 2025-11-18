/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                elegant: {
                    primary: '#f5f5f5',
                    secondary: '#e5e5e5',
                    accent: '#a3a3a3',
                    muted: '#737373',
                    dark: '#171717',
                },
            },
        },
    },
    plugins: [],
}

