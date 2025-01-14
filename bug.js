```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval.  The function passed to setInterval
    // does not properly update the state and creates a closure over the initial value of count
    const intervalId = setInterval(() => {
      setCount(count + 1); // count is always 0 here
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup function
  }, []);

  return <div>Count: {count}</div>;
}
```