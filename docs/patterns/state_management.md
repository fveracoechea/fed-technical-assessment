# State management

[Zustand](https://github.com/pmndrs/zustand) The current state management library we are implementing, there are some legacy redux modules, but the idea will be to replaced them with a Zustand store.

**Why zustand?** Redux is probably a solid and widely used library when it comes to managing global states. However, libraries like Zustand try to tackle the problem of managing global states in a more pragmatic and simpler way, while providing a better developer experience.

## Purpose

State management exists to make cross-component and cross-application data access easier as well as ensuring the integrity and shape of the data remains intact.

Therefore it helps to track your **data flow from your app to state and vice versa.** You know exactly where your data is. These state management tools also give you a point in time snapshot of the entire data. In that way, you know exactly where your data is and that makes your development faster.

## When to use it

### Sharing data across components

State management is recycling your data. Will you need that value again in other parts of your application? Use state management. Do you only need to store the value temporarily and reference it in a specific component, only for it to be discarded shortly after that? Don’t use state management.

## When to NOT use it

### Avoid state management for forms

Forms are often always ephemeral state, meaning the data only exists temporarily. An example of a form might be login form with a username and password or a form for adding a new product to your store. You enter the data and dispatch an action, the form gets cleared, and that’s it.

### Using GraphQL

You might not need state management at all. GraphQL offerings like Apollo offer an all-in-one package for working with data, including state management like functionality that makes syncing and working with your GraphQL server a breeze.

## Some example snippets for common scenarios

### Create a store

```js
import create from 'zustand'

const useBearStore = create(set => ({
  bears: 0,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))
```

### Bind your components

```js
function BearCounter() {
  const bears = useBearStore(state => state.bears)
  return <h1>{bears} around here ...</h1>
}

function Controls() {
  const increasePopulation = useBearStore(state => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}
```
