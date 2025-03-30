import { useEffect, useState } from "react";

function useCustomPointer(component) {
    const [pointer, setPointer] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPointer({
                x: event.clientX,
                y: event.clientY
            });
        };
        document.addEventListener("mousemove", handleMouseMove);

        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div style={{
            position: "fixed",
            top: pointer.y,
            left: pointer.x,
            cursor: "none"
        }}>
            {component}
        </div>
    )
};

export default useCustomPointer;