import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CalendarDays, Moon, LogIn } from "lucide-react";

const Navbar = () => {
    return (
        <nav aria-label="Main navigation" className="absolute inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6">
            <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/50 bg-[#F9F9F2]/85 px-4 py-3 shadow-lg shadow-black/10 backdrop-blur-xl sm:px-6">

                {/* Logo */}
                <div className="flex items-center gap-2">
                        <Image
                            src="/shlogo.jpg"
                            alt="Logo"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <h2 className="text-xl font-extrabold text-[#42512C] leading-5">
                            SocialHands
                        </h2>
                </div>

                {/* Upcoming Events */}
                <div className="hidden items-center gap-2 text-[#42512C] transition-colors hover:text-[#1C2012] md:flex">
                    <CalendarDays size={19} />
                    <h2 className="font-semibold">
                        Upcoming Events
                    </h2>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">

                    <Button
                        variant="outline"
                        size="icon"
                        aria-label="Toggle dark mode"
                        className="h-10 w-10 rounded-full border-gray-200 bg-white/70 text-green-700 shadow-sm hover:bg-white"
                    >
                        <Moon size={24} />
                    </Button>

                    <Button className="h-10 rounded-full bg-green-700 px-5 font-semibold text-white shadow-md hover:bg-green-800">
                        <LogIn size={19} />
                        Login
                    </Button>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;