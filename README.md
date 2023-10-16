# useWhyDidYouRender
> This react hook helps to find which prop change is causing re-renders in a React component, making it easier to fix rendering issues in the React component.

## How to use it:

1. Add the below code to your component.

```sh
useWhyDidYouRender(props, { name : "COMPONENT_NAME", printLog: true });
                    OR
const { changedProps } = useWhyDidYouRender(props);
console.log(changedProps);
```
### Output:
```sh
COMPONENT_NAME => {
    PROP_NAME: {
        from: oldValue,
        to: newValue,
    },
    PROP_NAME_2: {
        from: oldValue,
        to: newValue,
    },
    ---------------
}
```

## Options

1) name: number, Default: useWhyDidYouRender
2) printLog: boolean, Default: false

## License

MIT © [pulkitchdha]()
