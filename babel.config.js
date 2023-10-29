module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    //to add side drawer
    plugins: ["react-native-reanimated/plugin"],
  };
};
