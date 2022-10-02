# 说明

[题目链接](https://github.com/type-challenges/type-challenges/tree/main/questions/00014-easy-first)

```ts

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3

```


# 知识点

1. 空数组的第一个成员的类型为 never
2. 判断一个数组是否为空数组，可以使用"xxx extends []"
3. T['length'] 可以用于获取数组的长度，而 T['length'] extends 0 则可以判断是否为空数组
4. [infer 的使用](https://jkchao.github.io/typescript-book-chinese/tips/infer.html)