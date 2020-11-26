module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          "@assets": './src/assets',
          "@atoms": './src/components/@atoms',
          "@molecules": './src/components/@molecules',
          "@organisms": './src/components/@organisms',
          "@templates": "./src/components/templates",
          "@components": './src/components',
          "@routes": './src/routes',
          "@views": './src/views',
          "@services": './src/services',
          "@styles": './src/styles',
          "@utils": './src/utils',
        },
      },
    },
  },
};
