export default {
     entry : './src/index.js',
     output : {
          filename : 'index.js',
     },
     module : {
          loaders : [
               {
                    test : /\.jsx?$/,
                    exclude : /node_modules/,
                    loader : 'babel?presets[]=es2015&presets[]=react&presets[]=react-hmre'
               }
          ]
     }

}
