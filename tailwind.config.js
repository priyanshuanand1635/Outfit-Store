/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'theme-bg': 'var(--color-bg)',
        'theme-surface': 'var(--color-surface)',
        'theme-surface-low': 'var(--color-surface-low)',
        'theme-surface-mid': 'var(--color-surface-mid)',
        'theme-surface-high': 'var(--color-surface-high)',
        'theme-surface-highest': 'var(--color-surface-highest)',
        'theme-on-surface': 'var(--color-on-surface)',
        'theme-on-surface-var': 'var(--color-on-surface-var)',
        'theme-primary': 'var(--color-primary)',
        'theme-primary-dim': 'var(--color-primary-dim)',
        'theme-on-primary': 'var(--color-on-primary)',
        'theme-outline-var': 'var(--color-outline-var)',
        'theme-error': 'var(--color-error)',
      },
      fontFamily: {
        display: 'var(--font-display)',
        body: 'var(--font-body)',
        headline: 'var(--font-display)',
      },
      borderRadius: {
        btn: 'var(--radius-btn)',
        card: 'var(--radius-card)',
      },
      transitionDuration: {
        theme: 'var(--transition-speed)',
      }
    },
  },
  plugins: [],
}
