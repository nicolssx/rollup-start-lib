import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import preFixer from 'autoprefixer'
import postcssPresetEnv from 'postcss-preset-env'
import config from './config/config.build.js'
export const common = {
  input: config.input,
  output: config.output,
  // 指出应将哪些模块视为外部模块. “external”的数组形式不会处理通配符
  external: []
}
export const plugins = [
  resolve({
    // 将自定义选项传递给解析插件
    customResolveOptions: {
      moduleDirectory: 'node_modules'
    }
  }),
  commonjs(),
  json(),
  postcss({
    minimize: config.css.minimize,
    // extensions: ['.scss', '.css'],
    extract: config.css.extract, // 提取css
    plugins: [
      preFixer,
      postcssPresetEnv
    ]
  }),
  babel({
    exclude: 'node_modules/**' // 只编译我们的源代码
  })
]
