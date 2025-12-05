import useWindowStore from "#store/window.js";
import { useLayoutEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const { focusWindow, windows } = useWindowStore();

        // Safe fallback so the app never crashes on invalid keys
        const win = windows[windowKey] ?? { isOpen: false, zIndex: 0 };
        const { isOpen, zIndex } = win;

        const ref = useRef(null);

        // Opening animation
        useGSAP(() => {
            const el = ref.current;
            if (!el || !isOpen) return;

            el.style.display = "block";

            gsap.fromTo(
                el,
                { scale: 0.8, opacity: 0, y: 40 },
                { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
            );
        }, [isOpen]);

        // Make window draggable
        useGSAP(() => {
            const el = ref.current;
            if (!el) return;

            Draggable.create(el, {
                onPress: () => focusWindow(windowKey),
            });
        }, []);

        // Hide / show based on open state
        useLayoutEffect(() => {
            const el = ref.current;
            if (!el) return;

            el.style.display = isOpen ? "block" : "none";
        }, [isOpen]);

        return (
            <section
                id={windowKey}
                ref={ref}
                style={{ zIndex }}
                className="absolute"
            >
                <Component {...props} />
            </section>
        );
    };

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

    return Wrapped;
};

export default WindowWrapper;

