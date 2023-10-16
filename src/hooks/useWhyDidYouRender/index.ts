import { useEffect, useRef, useState } from "react";

interface IOptions {
    name?: string;
    printLog?: boolean;
}

type ChangePropsType = Record<string, { from: any, to: any }>;

export function useWhyDidYouRender(props: Record<string, any>, options: IOptions = {}) {
    const {
        name = "useWhyDidYouRender",
        printLog = false
    } = options;
    const previousProps = useRef(props);
    const [changedProps, setChangedProps] = useState<ChangePropsType>({});

    useEffect(() => {
        if (previousProps.current) {
            // merge the keys of previous and current data
            const keys = Object.keys({ ...previousProps.current, ...props });

            // to store what has change
            const data: ChangePropsType = {};

            for (const key of keys) {
                if (previousProps.current[key] !== props[key]) {
                    data[key] = {
                        from: previousProps.current[key],
                        to: props[key],
                    };
                }
            }

            if (Object.keys(data).length && printLog) {
                console.log(`${name} =>`, data);
                setChangedProps(data);
            }
        }
        previousProps.current = props;
    });

    return { 
        changedProps
    }
}
