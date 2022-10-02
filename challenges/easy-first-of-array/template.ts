// T extends [] 用于判断是否为空数组
// 空数组的第一个成员类型为 never
// type First<T extends any[]> = T extends [] ? never : T[0]

// T['length']可以获取数组的长度
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

// T[number] 获取的是联合类型，只需要判断 T[0] 是否在该联合类型中即可
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

// 使用解构数组 + infer，对第一项的类型进行推断
type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never
