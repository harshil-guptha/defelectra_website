/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./App.tsx",
        "./index.tsx",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    dark: '#0f172a', // Slate 900
                    primary: '#4f46e5', // Indigo 600
                    accent: '#818cf8', // Indigo 400
                    surface: '#1e293b', // Slate 800
                    text: '#f8fafc', // Slate 50
                    muted: '#94a3b8', // Slate 400
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
