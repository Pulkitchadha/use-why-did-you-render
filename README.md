# useWhyDidYouRender
> This react hook helps to find which prop change is causing re-renders in a React component, making it easier to fix rendering issues in the React component.

## How to use it:

1. First, install.
   
```sh
  npm install use-why-did-you-render
            OR
  yarn add use-why-did-you-render
```

2. Then,add the below code to your component.

```sh
import { useWhyDidYouRender } from "use-why-did-you-render";

useWhyDidYouRender(props, { name : "COMPONENT_NAME", printLog: true });
            OR
const { changedProps } = useWhyDidYouRender(props);
console.log(changedProps);
```
3. When component re-renders, it will print it on console.
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
}
```

### Options

| Property           | Description                        | Type                   | Default
| :------------------ |:----------------------------------:| :---------------------:|---------:|
| name          | Like Component name  | string | useWhyDidYouRender |
| printLog      | If true prints prop changes  | boolean | false

## License

MIT © [pulkitchdha]()
