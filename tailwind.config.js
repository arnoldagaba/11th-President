/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				rotaract: {
					blue: {
						light: '#EBF5FF',
						DEFAULT: '#0066CC',
						dark: '#004C99',
					},
					gold: {
						light: '#FFF8E6',
						DEFAULT: '#FFB800',
						dark: '#CC9200',
					},
					navy: {
						light: '#F0F4F8',
						DEFAULT: '#1E3A5F',
						dark: '#152A45',
					},
				},
				dark: {
					bg: '#111827',
					surface: '#1F2937',
					surfaceHover: '#374151',
					primary: {
						light: '#93C5FD',
						DEFAULT: '#3B82F6',
						dark: '#2563EB',
					},
					secondary: {
						light: '#FFD666',
						DEFAULT: '#FFB800',
						dark: '#CC9200',
					},
					text: {
						primary: '#F3F4F6',
						secondary: '#D1D5DB',
						tertiary: '#9CA3AF',
					}
				},
			},
			fontFamily: {
				outfit: ['Outfit', 'sans-serif'],
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-in-out',
				'slide-up': 'slideUp 0.5s ease-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
			},
		},
	},
	plugins: [],
};
