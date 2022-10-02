# 解题说明

[说明连接](https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.md)

```ts
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}

```

# 涉及的知识点

1. [keyof 的使用](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html)
2. [Mapped 类型的使用](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
3. [extends 泛型约束](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints)
   