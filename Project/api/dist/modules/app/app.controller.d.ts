import { AppService } from './app.service';
import { AppInfoDto } from './dto/app-info.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getAppInfo(): AppInfoDto;
    getHealth(): {
        status: string;
        timestamp: string;
        uptime: number;
    };
}
