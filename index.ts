export type Dict<T> = {
	[key: string]: T | undefined;
};

// Array.prototype.map, but for Dict
export function mapDict<T, S>(
    dict: Dict<T>, 
    fn: (arg: T, index: number) => S
) : Dict<S> {
    const ans : Dict<S> = {}
    Object.keys(dict).forEach((key, index) => {
        let val = dict[key]
        if (typeof val !== 'undefined'){
            ans[key] = fn(val, index)
        }
    })
    return ans
}
let d= {
    a: 'a', 
    b: 'b', 
    c: 'c'
}

let dd = mapDict(d, (s) => [s + s])
console.log(dd)
