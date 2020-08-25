module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-inline-import',
      {
        extensions: ['.svg'],
      },
    ],
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.js'],
        alias: {
          '@screens': './app/screens',
          '@assets': './app/assets',
          '@utils': './app/utils',
          '@navigation': './app/navigation',
          '@components': './app/components',
        },
      },
    ],
  ],
};
