import { AtSign, BriefcaseBusiness, Github, House, Instagram, LayoutList, Linkedin, ShapesIcon, StretchHorizontal, User, Youtube } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const MobileSidebar = ({ menuOpen, setMenuOpen, activeSection }) => {
    const { themeColors } = useTheme();

    return (
        <div className={`fixed top-0 right-0 w-80 h-full bg-neutral-900 z-20 transform transition-all duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full opacity-0'}`}>
            <div className="p-12 h-full overflow-y-auto text-neutral-400">
                <h3 className="text-lg font-medium mb-4">Menu</h3>

                <ul className="space-y-4">
                    {['Home', 'About', 'Resume', 'Services', 'Skills', 'Portfolio', 'Contact'].map(item => {
                        const isActive = activeSection === item.toLowerCase();
                        return (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className={`group flex items-center py-2 px-4 rounded-md hover:bg-neutral-900 transition-colors ${isActive ? 'text-white' : 'text-neutral-400 hover:' + themeColors.text}`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <div className={`${isActive ? themeColors.text : ''}`}>
                                        <SidebarIcon name={item} className="w-4 h-4" />
                                    </div>
                                    <span className="ml-2 text-sm">{item}</span>
                                </a>
                            </li>
                        );
                    })}
                </ul>

                <div className="mt-8">
                    <h3 className="text-lg font-medium mb-4">Social</h3>
                    <div className="flex space-x-4 ml-4 gap-2">
                        <a href="https://www.linkedin.com/in/golak-bihari-bemal-8264bb23b/" target="_blank" className={`w-4 flex items-center justify-center`}>
                            <Linkedin className={`hover:${themeColors.hover} transition-colors`} />
                        </a>
                        <a href="https://github.com/smith-bimal" target="_blank" className={`w-4 flex items-center justify-center`}>
                            <Github className={`hover:${themeColors.hover} transition-colors`} />
                        </a>
                        <a href="https://www.instagram.com/iamsmithbimal/" target="_blank" className={`w-4 flex items-center justify-center`}>
                            <Instagram className={`hover:${themeColors.hover} transition-colors`} />
                        </a>
                        <a href="https://www.youtube.com/smithbimal" target="_blank" className={`w-4 flex items-center justify-center`}>
                            <Youtube className={`hover:${themeColors.hover} transition-colors`} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Helper component for sidebar icons
const SidebarIcon = ({ name, className }) => {
    const icons = {
        Home: <House className={className} />,
        About: <User className={className} />,
        Resume: <BriefcaseBusiness className={className} />,
        Services: <StretchHorizontal className={className} />,
        Skills: <ShapesIcon className={className} />,
        Portfolio: <LayoutList className={className} />,
        Contact: <AtSign className={className} />
    };

    return icons[name] || null;
};

export default MobileSidebar;
