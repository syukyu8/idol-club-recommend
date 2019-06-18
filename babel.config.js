module.exports = function(api) {
  api.cache.using(() => process.env.NODE_ENV)
  return {
    presets: [
      ['@babel/preset-env', { targets: { esmodules: true }, useBuiltIns: 'usage' ,corejs:3}],
      ['@babel/preset-typescript'],
      ['@babel/preset-react']
    ],
    plugins: [
      ['@babel/plugin-proposal-object-rest-spread'],
      ['@babel/plugin-proposal-class-properties'],
      ['@babel/plugin-syntax-dynamic-import'],
      ['emotion']
    ]
  }
}
