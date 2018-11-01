declare module "lodash-es/memoize" {
    const memoize: (func: Function, resolver?: Function) => Function;
    export default memoize;
}
