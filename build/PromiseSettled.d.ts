declare type PromiseSettled = <T>(args: Array<Promise<T>>) => Promise<Array<{
    data?: T;
    error?: any;
    isRejected: boolean;
}>>;
declare const promiseSettled: PromiseSettled;
export default promiseSettled;
