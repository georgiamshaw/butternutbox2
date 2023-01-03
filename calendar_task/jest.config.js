module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  transform: {
    ".+\\.svg$": "jest-transform-stub",
  },
};
