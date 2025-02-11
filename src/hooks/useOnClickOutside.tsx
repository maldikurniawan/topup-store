import { useEffect } from "react";

type EventHandler = (event: MouseEvent | TouchEvent) => void;

export function useOnClickOutside<T extends HTMLElement>(
	ref: React.RefObject<T>,
	handler: EventHandler
): void {
	useEffect(() => {
		const listener = (event: MouseEvent | TouchEvent) => {
			// Do nothing if clicking ref's element or descendant elements
			if (!ref.current || ref.current.contains(event.target as Node)) {
				return;
			}
			handler(event);
		};

		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);

		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	}, [ref, handler]);
}
