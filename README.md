# useWhyDidYouRender
UseWhyDidYouRender helps to find which prop change is causing re-renders in a React component, making it easier to fix rendering issues in the react component.

To use, 

add useWhyDidYouRender(props, { name : "COMPONENT_NAME", printLog: true }) in any component

<!-- OR -->

const { changedProps } = useWhyDidYouRender(props);
console.log(changedProps);

# Output:
<!-- COMPONENT_NAME => {
    PROP_NAME: {
        from: oldValue,
        to: newValue,
    },
    PROP_NAME_2: {
        from: oldValue,
        to: newValue,
    },
    ---------------
} -->
