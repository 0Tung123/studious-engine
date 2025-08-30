export declare const ApiResponse: (options: {
    status: number;
    description: string;
    type?: any;
}) => <TFunction extends Function, Y>(target: TFunction | object, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
