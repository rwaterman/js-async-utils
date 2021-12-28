export declare type ToSuccess = {
    err: null;
    res: unknown;
};
export declare type ToError = {
    err: Error;
    res: null;
};
export declare function to(promise: Promise<unknown>): Promise<ToSuccess | ToError>;
