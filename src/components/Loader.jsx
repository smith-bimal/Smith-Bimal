import { useEffect, useState } from "react";
import "../assets/loader.css"

const Loader = ({ onFadeOut }) => {
    const [fade, setFade] = useState(false);

    useEffect(() => {
        if (onFadeOut) {
            setFade(true);
            const timer = setTimeout(() => {
                onFadeOut();
            }, 500); // match CSS transition duration
            return () => clearTimeout(timer);
        }
    }, [onFadeOut]);

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-neutral-900 transition-opacity duration-500 ${fade ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        >
            <div className="flex flex-col items-center">
                <div className="loader3">
                    <div className="circle1" />
                    <div className="circle1" />
                    <div className="circle1" />
                    <div className="circle1" />
                    <div className="circle1" />
                </div>
            </div>
        </div>
    );
};

export default Loader;