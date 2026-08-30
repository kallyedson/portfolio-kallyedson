import { styled } from "@mui/material/styles";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

interface AnimationComponentProps {
    children: ReactNode;
    direction: "left" | "right";
    delay?: number;
}

interface AnimationWrapperProps {
    visible: boolean;
    direction: "left" | "right";
    delay: number;
}

const AnimationWrapper = styled("div", {
    shouldForwardProp: (prop) =>
        prop !== "visible" &&
        prop !== "direction" &&
        prop !== "delay",
})<AnimationWrapperProps>(({ visible, direction, delay }) => ({
    width: "100%",
    maxWidth: "100%",
    height: "100%",
    opacity: visible ? 1 : 0,

    transform: visible
        ? "translateX(0)"
        : `translateX(${direction === "left" ? "-60px" : "60px"})`,

    transition: `
        opacity 0.7s ease ${delay}ms,
        transform 0.7s ease ${delay}ms
    `,
}));

const AnimationComponent = ({
    children,
    direction,
    delay = 0
}: AnimationComponentProps) => {
    const elementRef = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const element = elementRef.current;

        if (!element) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
            },
            {
                threshold: 0.15
            }
        );
        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <AnimationWrapper
            ref={elementRef}
            visible={visible}
            direction={direction}
            delay={delay}
        >
            {children}
        </AnimationWrapper>
    );
};

export default AnimationComponent;