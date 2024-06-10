module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['@babel/plugin-proposal-export-namespace-from'],
      ['@babel/plugin-proposal-decorators', { 'legacy': true }],
      [
        'module-resolver',
        {
          root: ['./app'],
          extensions: ['.ios.js', '.android.js', '.cjs', '.js', '.ts', '.tsx', '.json'],
          alias: {
            tests: ['./tests/'],
            "@components": "./app/components",
            "@extensions": "./app/extensions",
            "@hooks": "./app/hooks",
            "@models": "./app/models",
            "@constants": "./app/constants",
            "@contexts": "./app/contexts",
            "@services": "./app/services",
          }
        }
      ],
      ['react-native-reanimated/plugin']
    ],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};
