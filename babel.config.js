module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        safe: false,
        allowUndefined: true,
      },
    ],
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        root: ['./src'],
        alias: {
          '@config': './src/config',
          '@assets': './src/assets',
          '@components': './src/components',
          '@i18n': './src/i18n',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@hooks': './src/hooks',
          '@core': './src/core',
          '@core/utils': './src/core/utils',
          '@core/services': './src/core/services',
          '@core/types': './src/core/types',
          '@core/providers': './src/core/providers',
          '@core/theme': './src/core/theme',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
}
