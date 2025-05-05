module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@': './src',
            '@api': './src/api',
            '@components': './src/components',
            '@constants': './src/constants',
            '@hooks': './src/hooks',
            '@lib': './src/lib',
            '@screens': './src/screens',
            '@store': './src/store',
            '@theme': './src/theme',
            '@types': './src/types',
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        },
      ],
    ],
  };
};
