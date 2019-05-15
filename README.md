Notes & components I prepared for reference while following the [hooks documentation on react docs](https://reactjs.org/docs/hooks-intro.html). Most of the code is adapted from the examples in docs.

---
#### Notes
- `useEffect`: cleans up the previous effects before applying the next effects after every render.

>If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument. This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run.

- How can I measure a DOM node? [(faq)](https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node)
>In order to measure the position or size of a DOM node, you can use a callback ref. React will call that callback whenever the ref gets attached to a different node.
---
#### Rules
>Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function.

>To conditionally fire and effect, pass a second argument to useEffect that is the array of values that the effect depends on. [(code)](https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect)
---

#### Rules of Thumb
- Use multiple effect hooks to keep unrelated logic separate.
>Hooks lets us split the code based on what it is doing rather than a lifecycle method name. React will apply every effect used by the component, in the order they were specified.

- Instead of keeping all state in a single object:
>split state into multiple state variables based on which values tend to change together.
---
#### [API:](https://reactjs.org/docs/hooks-reference.html)
- useState
- useEffect
- useContext
- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue

--- 
##### *Kicked off with [cra](https://github.com/facebook/create-react-app), `yarn && yarn start` to run.*
