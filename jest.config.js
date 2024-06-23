module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@config/(.*)$": "<rootDir>/src/config/$1",
    "^@models/(.*)$": "<rootDir>/src/models/$1",
    "^@controllers/(.*)$": "<rootDir>/src/controllers/$1",
    "^@services/(.*)$": "<rootDir>/src/services/$1",
    "^@repositories/(.*)$": "<rootDir>/src/repositories/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/src/controllers/tests/setup.jest.ts"],
};
