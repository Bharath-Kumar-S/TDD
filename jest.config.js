import { createDefaultPreset } from "ts-jest";

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
export default {
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { useESM: true }], // Tells ts-jest to use ESM
    ...tsJestTransformCfg,
  },
  extensionsToTreatAsEsm: [".ts"], // Explicitly treat .ts files as ESM
};
