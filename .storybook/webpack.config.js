const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.stories\.js$|\/stories\/.*\.js$/,
        loaders: [
          {
            loader: require.resolve('@storybook/addon-storysource/loader'),
            options: {
              prettierConfig: {
                parser: 'babylon',
              },
            },
          },
        ],
        enforce: 'pre',
      },
    ],
  },
};
