"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rules = void 0;
const noDynamicEnvVar_1 = require("./noDynamicEnvVar");
const noEnvVarDestructuring_1 = require("./noEnvVarDestructuring");
const use_dom_exports_1 = require("./use-dom-exports");
exports.rules = {
    'no-dynamic-env-var': noDynamicEnvVar_1.noDynamicEnvVar,
    'no-env-var-destructuring': noEnvVarDestructuring_1.noEnvVarDestructuring,
    'use-dom-exports': use_dom_exports_1.useDomExports,
};
