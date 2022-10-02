# 说明

[题目说明](https://github.com/type-challenges/type-challenges/tree/main/questions/00007-easy-readonly)

```ts
// for example
interface Todo {
  title: string
  description: string
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property

```

# 知识点

1. readonly [链接](https://jkchao.github.io/typescript-book-chinese/typings/readonly.html)