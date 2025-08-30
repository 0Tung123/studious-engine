"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponse = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const ApiResponse = (options) => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiResponse)({
        status: options.status,
        description: options.description,
        type: options.type,
    }));
};
exports.ApiResponse = ApiResponse;
//# sourceMappingURL=api-response.decorator.js.map