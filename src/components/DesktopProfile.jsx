import { Github, Instagram, Linkedin, Mail, Youtube } from "lucide-react";

const DesktopProfile = ({ themeColors }) => {
    return (
        <div className="relative top-8 left-1/2 -translate-x-1/2 lg:fixed lg:top-1/2 xl:left-20 lg:left-12 lg:-translate-y-1/2 lg:translate-x-0 w-fit max-w-[25rem] rounded-3xl bg-transparent backdrop-blur-sm border border-neutral-700 z-10">
            <div className="flex flex-col h-full p-8">
                <div className="">
                    <div className="flex items-center justify-between text-right mb-8">
                        <img src="logo.png" alt="Logo" className="h-10" />
                        <span className="text-sm">Full stack <br /> Software developer</span>
                    </div>

                    <img src="profile.jpg" alt="Profile" className="w-full h-78 object-cover rounded-lg mb-6" />

                    <div className="space-y-2 text-center">
                        <h3 className="text-xl">gbbeemal@gmail.com</h3>
                        <h3 className="text-xl">Based in Bhubaneswar, Odisha, IN</h3>
                    </div>
                </div>

                <div className="">
                    <p className="text-center text-neutral-500 text-sm mt-6">© 2023 Smith. All Rights Reserved</p>
                    <div className="flex justify-center space-x-4 my-8">
                        <a href="#" className={`h-12 w-12 rounded-full flex items-center justify-center border-2 border-neutral-600 hover:${themeColors.border} transition-colors hover:${themeColors.text}`}>
                            <Linkedin className={`text-neutral-400 w-5 transition-colors`} />
                        </a>
                        <a href="#" className={`h-12 w-12 rounded-full flex items-center justify-center border-2 border-neutral-600 hover:${themeColors.border} transition-colors hover:${themeColors.text}`}>
                            <Github className={`text-neutral-400 w-5 transition-colors`} />
                        </a>
                        <a href="#" className={`h-12 w-12 rounded-full flex items-center justify-center border-2 border-neutral-600 hover:${themeColors.border} transition-colors hover:${themeColors.text}`}>
                            <Instagram className={`text-neutral-400 w-5 transition-colors`} />
                        </a>
                        <a href="#" className={`h-12 w-12 rounded-full flex items-center justify-center border-2 border-neutral-600 hover:${themeColors.border} transition-colors hover:${themeColors.text}`}>
                            <Youtube className={`text-neutral-400 w-5 transition-colors`} />
                        </a>
                    </div>

                    <a href="#contact" className={`flex items-center justify-center ${themeColors.bg} border-2 ${themeColors.border} hover:opacity-90 py-3 px-6 rounded-full transition-all hover:bg-transparent ${themeColors.hover}`}>
                        <Mail className="w-5 mr-2"/> Hire Me!
                    </a>

                </div>
            </div>
        </div>
    );
};

export default DesktopProfile;
