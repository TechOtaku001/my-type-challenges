# 说明

[题目链接](https://github.com/type-challenges/type-challenges/tree/main/questions/00043-easy-exclude)

```ts

type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'

```

# 知识点

[分配条件类型](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types)

```ts
/**
 * 
 * 在使用 extends 关键字的条件类型中，如果 extends 前面的参数是一个泛型且还是一个联合类型
 * 则将联合类型拆成单项，分别代入条件类型，再将代入结果联合起来，最为最终的判断结果
 * 
 */

type P<T> = T extends 'x' ? never : T

// Test 的类型为'y'
type Test = P<'x' | 'y'>

// Test 的类型等价于
type Test1 = P<'x'> | P<'y'>

```