import { AtSign, BriefcaseBusiness, House, LayoutList, ShapesIcon, StretchHorizontal, User } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navigation = ({ activeSection }) => {
  const { themeColors } = useTheme();
  const navItems = [
    { id: 'home', icon: <House className="w-5" />, label: 'Home' },
    { id: 'about', icon: <User className="w-5" />, label: 'About' },
    { id: 'resume', icon: <BriefcaseBusiness className="w-5" />, label: 'Resume' },
    { id: 'services', icon: <StretchHorizontal className="w-5" />, label: 'Services' },
    { id: 'skills', icon: <ShapesIcon className="w-5" />, label: 'Skills' },
    { id: 'portfolio', icon: <LayoutList className="w-5" />, label: 'Portfolio' },
    { id: 'contact', icon: <AtSign className="w-5" />, label: 'Contact' }
  ];

  return (
    <div className="fixed right-16 top-1/2 -translate-y-1/2 z-10 hidden md:block border border-neutral-700 p-5 rounded-full bg-[#6161612d] bg-opacity-75 backdrop-blur-sm">
      <ul className="flex flex-col space-y-4">
        {navItems.map(item => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`flex items-center ${activeSection === item.id ? themeColors.text : 'text-neutral-400'} hover:${themeColors.text} transition-colors`}
            >
              <div className="tooltip tooltip-left" data-tip={item.label}>
                {item.icon}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
