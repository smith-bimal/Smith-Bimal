import { useTheme } from "../context/ThemeContext";

const themeColors = [
    { name: "green", class: "bg-green-400", value: "green" },
    { name: "darkYellow", class: "bg-yellow-600", value: "darkYellow" },
    { name: "orange", class: "bg-orange-500", value: "orange" },
    { name: "sky", class: "bg-sky-400", value: "sky" },
    { name: "gray", class: "bg-gray-400", value: "gray" },
    { name: "blue", class: "bg-blue-600", value: "blue" },
    { name: "red", class: "bg-red-500", value: "red" },
    { name: "pink", class: "bg-pink-500", value: "pink" },
];

const threeDShapes = [
    { name: "Earth Lines Sphere", video: "video1.mp4" },
    { name: "3D Abstract Ball", video: "video2.mp4" },
    { name: "Water Waves", video: "video3.mp4" },
    { name: "Liquids Wavy", video: "video4.mp4" },
    { name: "Solid Color", video: ".mp4" },
    { name: "Simple Strings", video: "video5.mp4" },
];

const ThemeConfigPanel = ({ open, setConfigOpen }) => {
    const { theme, setCurrentTheme } = useTheme();

    const handleThemeChange = (color) => {
        localStorage.setItem("theme", color);
        setCurrentTheme(color);
        setConfigOpen(false);
    }

    return (
        <div
            className={`fixed top-0 right-0 h-full w-full md:w-3xl bg-neutral-900 z-50 transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
            style={{ maxWidth: "100vw" }}
        >
            <div className="p-10 pt-20 lg:p-30 transition-all">
                <h2 className="text-3xl font-light mb-10 lg:mb-16">Configuration</h2>
                <div className="mb-16 lg:mb-20">
                    <div className="text-xs font-semibold mb-4 lg:mb-10 text-neutral-400">COLORS</div>
                    <div className="flex gap-5 mb-8 flex-wrap">
                        {themeColors.map((color, idx) => (
                            <button
                                key={color.value}
                                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${theme === color.value ? "border-white scale-110" : "border-transparent"} ${color.class} hover:scale-110 cursor-pointer`}
                                onClick={() => handleThemeChange(color.value)}
                                aria-label={color.name}
                            >
                                {theme === color.value && (
                                    <span className="block w-3 h-3 rounded-full border-2 border-white bg-white bg-opacity-30 cursor-pointer" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="text-xs font-semibold mb-4 lg:mb-10 text-neutral-400">THREE DIMENSIONAL SHAPES</div>
                    <div className="flex flex-wrap gap-8 lg:gap-x-12">
                        {threeDShapes.map((shape) => (
                            <div key={shape.name} className="text-white text-sm font-normal cursor-pointer whitespace-nowrap">
                                {shape.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThemeConfigPanel;
