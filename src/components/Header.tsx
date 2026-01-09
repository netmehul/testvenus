import { Search, User, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/AssetsFromUser/logo.png';

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-black border-b border-gray-800">
            <div className="container mx-auto px-4 md:px-8 h-20 md:h-24 flex items-center justify-between gap-6">

                {/* Search Section - White input on black background */}
                <div className="flex items-center flex-1 max-w-xs">
                    <div className="relative group w-full">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white group-hover:text-gray-300 transition-colors" />
                        <input
                            type="text"
                            placeholder="Search iVenus..."
                            className="w-full pl-9 pr-4 py-2.5 bg-black text-white border border-gray-700 rounded-full text-sm focus:ring-2 focus:ring-gray-500 transition-all outline-none placeholder:text-gray-500"
                        />
                    </div>
                </div>

                {/* Logo Section - Centered */}
                <Link to="/" className="flex items-center justify-center">
                    <img src={Logo} alt="iVenus Logo" className="h-10 md:h-12 w-auto object-contain" />
                </Link>

                {/* User Actions Section - White icons on black background */}
                <div className="flex items-center justify-end gap-6 flex-1 max-w-sm">
                    <Link to="/signin" className="p-2 hover:bg-gray-800 rounded-full transition-colors relative group">
                        <User className="w-6 h-6 text-white" />
                        <span className="sr-only">Account</span>
                    </Link>
                    <button className="p-2 hover:bg-gray-800 rounded-full transition-colors relative group">
                        <ShoppingBag className="w-6 h-6 text-white" />
                        <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-black"></span>
                        <span className="sr-only">Cart</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
