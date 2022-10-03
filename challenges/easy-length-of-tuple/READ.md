# 说明

[题目链接](https://github.com/type-challenges/type-challenges/tree/main/questions/00018-easy-tuple-length)

```ts

type tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

type teslaLength = Length<tesla>  // expected 4
type spaceXLength = Length<spaceX> // expected 5

```

# 知识点

1. [元组](https://www.typescriptlang.org/docs/handbook/variable-declarations.html#tuple-destructuring)
