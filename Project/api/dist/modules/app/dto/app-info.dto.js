"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppInfoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class AppInfoDto {
    name;
    version;
    environment;
    message;
}
exports.AppInfoDto = AppInfoDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Application name',
        example: 'API',
    }),
    __metadata("design:type", String)
], AppInfoDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Application version',
        example: '1.0.0',
    }),
    __metadata("design:type", String)
], AppInfoDto.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Current environment',
        example: 'development',
    }),
    __metadata("design:type", String)
], AppInfoDto.prototype, "environment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Welcome message',
        example: 'API is running successfully!',
    }),
    __metadata("design:type", String)
], AppInfoDto.prototype, "message", void 0);
//# sourceMappingURL=app-info.dto.js.map