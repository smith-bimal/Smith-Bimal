
import MobileSidebar from "./MobileSidebar";
import Overlay from "./ui/Overlay";

const SideBar = ({ menuOpen, setMenuOpen, activeSection, configOpen }) => {

  return (
    <div className={`fixed ${menuOpen || configOpen ? "z-20" : "-z-10"} w-screen h-screen`}>
      <Overlay className={`w-full h-full bg-[#ffffff2a] absolute top-0 left-0 backdrop-blur-sm z-20 ${menuOpen || configOpen ? "" : "opacity-0"} transition-all duration-300`} />
      <MobileSidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} activeSection={activeSection} />
    </div>
  );
};

export default SideBar;
