module.exports = function (api) {
  api.cache.never();
  return {
    presets: ['babel-preset-expo'],
    plugins: ['python'],
  };
};
