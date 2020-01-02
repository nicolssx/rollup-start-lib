export default {
  path: 'src', // rollup监听路径
  input: 'src/main.js', // 入口文件
  outputPath: 'dist', // 预览监听路径
  output: { // rollup输出配置
    file: 'dist/js/Library.js',
    name: 'Library',
    format: 'umd'
  },
  css: { // css配置
    minimize: true, // 压缩css
    extract: false // 提取css
  },
  server: { // dist服务配置
    port: 9001,
    open: false
  }
}
