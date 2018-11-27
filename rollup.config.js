import { rollup } from 'rollup';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import minify from "rollup-plugin-babel-minify"

const plugins = [
  nodeResolve({ extensions: ['.js'] }),
  commonjs({extensions: ['.js']}),
  babel({
    presets: [['@babel/preset-env',{"useBuiltIns": "entry","targets": "> 0.25%, not dead"}]],
  }),
]

if(process.env.NODE_ENV == "production"){
  plugins.push(minify({comments: false}))
}

export default {
  input: 'index.js',
  plugins: plugins
}