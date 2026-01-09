import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProfileBg from '../assets/user-account-page/user-account-profile-background.jpg';
import ProfileImage from '../assets/user-account-page/Ellipse 23.svg';

export function AccountProfileHeader() {
    const navigate = useNavigate();

    const handleSignOut = () => {
        // Implement sign out logic here
        navigate('/');
    };

    return (
        <div className="relative w-full h-[250px]">
            {/* Abstract Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF9A9E] via-[#FECFEF] to-[#FEADA6] opacity-80">
                <img
                    src={ProfileBg}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Profile Content Container */}
            <div className="container absolute top-[160px] left-1/2 -translate-x-1/2 w-full px-4 flex justify-between items-center">

                {/* User Card - Glassmorphism */}
                <div className="flex items-center gap-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-[24px] p-5 shadow-lg min-w-[260px]">
                    <div className="w-[75px] h-[75px] rounded-full overflow-hidden border-2 border-white/50 bg-white">
                        <img
                            src={ProfileImage}
                            alt="User Avatar"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col text-[#151515]">
                        <span className="text-[28px] font-bold leading-tight">Hello 👋🏻</span>
                        <span className="text-[18px] font-normal">John Doe</span>
                    </div>
                </div>

                {/* Sign Out Button */}
                <button
                    onClick={handleSignOut}
                    className="flex items-center gap-2 bg-white px-5 py-3 rounded-[12px] text-[#525252] text-[16px] hover:bg-gray-50 transition-colors shadow-sm"
                >
                    Sign Out
                    <LogOut className="w-5 h-5 text-[#525252]" />
                </button>
            </div>
        </div>
    );
}
