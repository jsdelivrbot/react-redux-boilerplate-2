module.exports = options => {
  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
    },
    devServer: {
        compress: true,
        disableHostCheck: true,
        contentBase: './',
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    }    
                ]
            }    
        ]
    }
  };
};