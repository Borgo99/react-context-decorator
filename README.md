This idea is based on the fact that the following component is re-rendered only if the useMemo dependencies have been changed.

```
const TestComponent = (props) => {
  const currValue = useContext(MyContext).state[props.value];

  const content = useMemo(() => {
    const { children, bgColor } = props;
    console.log("RERENDERED", bgColor);
    return (
      <div style={{ backgroundColor: bgColor }}>
        <h1>Value: {currValue}</h1>
        <div>{children}</div>
      </div>
    );
  }, [...Object.values(props), currValue]);

  return <>{content}</>;
};
```

The cost depends on the useMemo hook. So, we are supposing that if the dependencies of useMemo don't change, the cost of re-render the following component are about zero, while we have the cost to check if props.title is changed (useMemo does that under the hood).

```
const TestComponent = (props) => {

  const content = useMemo(() => {
    return <h1>{props.title}</h1>
  }, [props.title]);

  return <>{content}</>;
};
```
