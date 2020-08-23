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
          '@app/screens': './app/screens',
          '@app/assets': './app/assets',
          '@app/navigation': './app/navigation',
        },
      },
    ],
  ],
};
