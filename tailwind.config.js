export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#030712',
          bg2: '#111827',
          border: 'rgba(255,255,255,0.08)',
          card: 'rgba(255,255,255,0.04)'
        },
        accent: {
          primary: '#3B82F6',
          secondary: '#8B5CF6',
          highlight: '#06B6D4'
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#9CA3AF'
        }
      },
      fontFamily: {
        space: ['Space Grotesk', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        glow: 'glow 2s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' }
        }
      },
      boxShadow: {
        glow: '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.5)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.5)'
      }
    }
  },
  plugins: []
}
