const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.(ts|tsx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            transpileOnly: true,
          },
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader?modules', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
};
