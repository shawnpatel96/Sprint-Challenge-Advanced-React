- [ ] Why would you use class component over function components (removing hooks from the question)?

functional components have much cleaner syntax and is easier to understand. 
functional components without hooks are stateless stale components that can take in props and return some jsx, 
that is all. 
on the other hand class components can implenet logic and have better versility.  





- [ ] Name three lifecycle methods and their purposes.

mounting, updating, unmounting.
render()- is a required method in a class component, render occurs when mounting
componentDidMount()- called once component is mounted, can put axios calls here and able to use SETSTATE
componentDidUpdate()- occures when component is updated due to state changes, you can use setstate here but must use useEffect() with
correct dependcy array to avoid infinite loops ( still a bit foggy on this )


- [ ] What is the purpose of a custom hook?
		custom hooks allow us to reuse stateful logic, i.e useLocalStorage, useForm, darkmode

- [ ] Why is it important to test our apps?

gives us confidence in our code and shipping near perfected apps without bugs to users ( I assume there's a more complicated use case other than testing things that are already on the DOM) we can test the funcitonality of certain things

