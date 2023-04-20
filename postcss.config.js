import AutoPrefixer from 'autoprefixer';
export default {
  plugins: {
    tailwindcss: {config: './tailwind.config.ts'},
    autoprefixer: {config: AutoPrefixer},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  },
}
