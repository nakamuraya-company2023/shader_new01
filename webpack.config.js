


module.exports = {
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: `./src/index.js`,
    // ファイルの出力設定
    output: {
      //  出力ファイルのディレクトリ名(省略可)
      path: `${__dirname}/dist`,
      // 出力ファイル名
      filename: 'main.js',
    },
    mode: 'development',
    devServer:{
        static:"dist",
        open:true
    },
    module: {
        rules: [
            {
                test: /\.(frag|vert|glsl)$/,
                exclude: '/node_modules/',
                use: [
                    'raw-loader',
                    'glslify-loader'
                ]
            },
        ],
    },
  };


