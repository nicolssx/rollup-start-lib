import serve from 'rollup-plugin-serve'
import liveReload from 'rollup-plugin-livereload'
import {common, plugins} from './rollup.build.js'
import config from './config/config.build.js'
export default {
  ...common,
  watch: {
    include: `${config.path}/**`,
    exclude: 'node_modules/**'
  },
  plugins: [
    ...plugins,
    serve({
      contentBase: config.outputPath,
      port: config.server.port,
      open: config.server.open
    }),
    liveReload({
      watch: config.outputPath,
      verbose: false
    })
  ]
}
