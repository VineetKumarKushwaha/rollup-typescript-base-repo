type PromiseSettled = <T>(args: Array<Promise<T>>) =>
    Promise<Array<{data?: T; error?: any; isRejected: boolean}>>;

const promiseSettled: PromiseSettled = args => Promise.all(
    args.map(promise => promise.then(
        data => ({ data, isRejected: false }),
        error => ({ error, isRejected: true })
    ))
);

export default promiseSettled;
