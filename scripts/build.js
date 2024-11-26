buildPlugin({
  entryPoints: ['builds/cdn.js'],
  outfile: 'dist/alpine-countdown-timer.min.js',
})

buildPlugin({
  entryPoints: ['builds/module.js'],
  outfile: 'dist/alpine-countdown-timer.esm.js',
  platform: 'neutral',
  mainFields: ['main', 'module'],
})

function buildPlugin(buildOptions) {
  return require('esbuild').buildSync({
    ...buildOptions,
    minify: true,
    bundle: true,
  })
}
