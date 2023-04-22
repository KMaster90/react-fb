/** @type {import('postcss-load-config').Config} */
import tailwind from 'tailwindcss'
import cssnano from 'cssnano'
import autoprefixer from 'autoprefixer'
import tailwindConfig from './tailwind.config.js'

export default {
  plugins: [
    tailwind(tailwindConfig),
    autoprefixer,
    ...(process.env.NODE_ENV === 'production' ? [ cssnano ] : [])
  ],
}
