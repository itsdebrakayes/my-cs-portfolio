import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-subtle': 'var(--gradient-subtle)',
			},
			boxShadow: {
				'soft': 'var(--shadow-soft)',
				'medium': 'var(--shadow-medium)',
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'app-open': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.3) translateY(100px)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1) translateY(0)'
					}
				},
				'app-close': {
					'0%': {
						opacity: '1',
						transform: 'scale(1) translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'scale(0.3) translateY(100px)'
					}
				},
				'app-minimize': {
					'0%': {
						opacity: '1',
						transform: 'scale(1)'
					},
					'100%': {
						opacity: '0',
						transform: 'scale(0.05) translateY(200px)'
					}
				},
				'app-restore': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.05) translateY(200px)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1) translateY(0)'
					}
				},
				'unlock-slide': {
					'0%': {
						opacity: '1',
						transform: 'scale(1) translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'scale(1.1) translateY(-50px)'
					}
				},
				'desktop-enter': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.95) translateY(50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1) translateY(0)'
					}
				},
				'dock-bounce': {
					'0%': {
						transform: 'translateY(0) scale(1)'
					},
					'50%': {
						transform: 'translateY(-8px) scale(1.1)'
					},
					'100%': {
						transform: 'translateY(0) scale(1)'
					}
				},
				'spring-bounce': {
					'0%': {
						transform: 'scale(1)'
					},
					'10%': {
						transform: 'scale(0.9)'
					},
					'40%': {
						transform: 'scale(1.03)'
					},
					'60%': {
						transform: 'scale(0.98)'
					},
					'80%': {
						transform: 'scale(1.01)'
					},
					'100%': {
						transform: 'scale(1)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'app-open': 'app-open 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				'app-close': 'app-close 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19)',
				'app-minimize': 'app-minimize 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'app-restore': 'app-restore 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				'unlock-slide': 'unlock-slide 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'desktop-enter': 'desktop-enter 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				'dock-bounce': 'dock-bounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'spring-bounce': 'spring-bounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
			},
			transitionTimingFunction: {
				'apple': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
				'apple-spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				'apple-ease': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'apple-bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
