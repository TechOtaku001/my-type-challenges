type MyExclude<T, U> = T extends U ? never : T

type P<T> = T extends 'x' ? never : T

type Test = P<'x' | 'y'>

type Test1 = P<'x'> | P<'y'>
