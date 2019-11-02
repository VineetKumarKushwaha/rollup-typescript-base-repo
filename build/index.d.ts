declare const _default: {
    someStyle: string;
    settled: <T>(args: Promise<T>[]) => Promise<{
        data?: T | undefined;
        error?: any;
        isRejected: boolean;
    }[]>;
};
export default _default;
