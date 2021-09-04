module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.jsx', '.js', '.json'],
        alias: {
          '@navigation': '',
          '@components': './src/components',
          '@assets': './src/assets',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
