import _ from "lodash";
import { useCallback, useRef } from "react";

export const useDebounce = (callback: any, delay: number) => {
	const callbackRef: any = useRef();
	callbackRef.current = callback;
	return useCallback(
		_.debounce((...args) => callbackRef.current(...args), delay),
		[]
	);
};
