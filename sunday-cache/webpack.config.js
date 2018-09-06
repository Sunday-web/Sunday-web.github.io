module.exports = { 
  entry: './src/index.js', 
  mode: 'production',
  output: { 
    path: __dirname, 
    filename: './release/bundle.js' 
  }, 
  module: { 
    rules: [{ 
        test: /\.js?$/, 
        exclude: /(node_modules)/, 
        loader: 'babel-loader' 
      }] 
  } 
}