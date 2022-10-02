# 说明

[题目链接](https://github.com/type-challenges/type-challenges/tree/main/questions/00011-easy-tuple-to-object)

```ts

// for example
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

```

# 知识点

1. typeof [链接](https://www.typescriptlang.org/docs/handbook/2/typeof-types.html)
2. 遍历数组的方法：T[number]
