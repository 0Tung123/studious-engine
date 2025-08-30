"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerConfig = exports.redisConfig = exports.typeormConfig = exports.databaseConfig = exports.appConfig = void 0;
var app_config_1 = require("./app.config");
Object.defineProperty(exports, "appConfig", { enumerable: true, get: function () { return __importDefault(app_config_1).default; } });
var database_config_1 = require("./database.config");
Object.defineProperty(exports, "databaseConfig", { enumerable: true, get: function () { return __importDefault(database_config_1).default; } });
var typeorm_config_1 = require("./typeorm.config");
Object.defineProperty(exports, "typeormConfig", { enumerable: true, get: function () { return __importDefault(typeorm_config_1).default; } });
var redis_config_1 = require("./redis.config");
Object.defineProperty(exports, "redisConfig", { enumerable: true, get: function () { return __importDefault(redis_config_1).default; } });
var swagger_config_1 = require("./swagger.config");
Object.defineProperty(exports, "swaggerConfig", { enumerable: true, get: function () { return swagger_config_1.swaggerConfig; } });
//# sourceMappingURL=index.js.map