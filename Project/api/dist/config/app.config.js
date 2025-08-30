"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('app', () => ({
    nodeEnv: process.env.NODE_ENV,
    name: process.env.APP_NAME,
    port: parseInt(process.env.PORT || '3002', 10),
}));
//# sourceMappingURL=app.config.js.map