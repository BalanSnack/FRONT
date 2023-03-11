export default {
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
      diagnostics: false,
    },
  },
  transform: {
    "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "ts-jest",
  },
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.test.{ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{ts,tsx}",
  ],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};
