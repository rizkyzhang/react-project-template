const path = require("path")

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  jest: {
    configure: {
      preset: "ts-jest",
      testEnvironment: "jest-environment-jsdom",
      collectCoverageFrom: ["src/**/*.{ts, tsx}"],
      coverageThreshold: {
        global: {
          branches: 0,
          functions: 0,
          lines: 0,
          statements: 0,
        },
      },
      moduleNameMapper: {
        "@/(.*)": "<rootDir>/$1",
      },
      moduleDirectories: ["node_modules", "src"],
      modulePathIgnorePatterns: ["dist"],
    },
  },
}
