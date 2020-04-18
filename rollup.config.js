import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

const prefix = 'dist/bundle'

const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/index.js',
  output: [
    {
      file: `${prefix}.cjs.js`,
      format: 'cjs'
    },
    {
      file: `${prefix}.esm.js`,
      format: 'esm'
    },
    {
      name: pkg.name,
      file: `${prefix}.umd.js`,
      format: 'umd',
      globals: {
        react: 'React'
      }
    }
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    production && terser()
  ],
  external: ['react']
}
