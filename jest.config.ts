export default {
    preset: "ts-jest",
    testEnvironment: "node",
    clearMocks: true,
    moduleFileExtensions: ["ts", "js"],
    testMatch: ["<rootDir>/tests/**/*.test.ts"]
};
