import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import { string } from 'rollup-plugin-string'
import { terser } from 'rollup-plugin-terser'

// import pkg from './package.json'

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
      name: 'libraryRollupStarter',
      file: `${prefix}.umd.js`,
      globals: {
        react: 'React'
      },
      format: 'umd'
    }
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    string({
      include: '**/*.css'
    }),
    production && terser()
  ],
  external: ['react']
}
