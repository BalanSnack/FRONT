module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css)$": "<rootDir>/__mocks__/styleMock.js",
  },
  testMatch: ["**/__tests__/**/*.test.(ts|tsx|js|jsx)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
