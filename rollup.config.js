import { rollup } from 'rollup';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'index.js',
  plugins: [
    nodeResolve({ extensions: ['.js'] }),
    commonjs({extensions: ['.js']}),
    babel({
      presets: [['@babel/preset-env',{"useBuiltIns": "entry","targets": "> 0.25%, not dead"}]],
    }),
  ]
}