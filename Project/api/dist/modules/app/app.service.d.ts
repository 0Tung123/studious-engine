import { ConfigService } from '@nestjs/config';
import { AppInfoDto } from './dto/app-info.dto';
export declare class AppService {
    private configService;
    constructor(configService: ConfigService);
    getAppInfo(): AppInfoDto;
    getHealth(): {
        status: string;
        timestamp: string;
        uptime: number;
    };
}
