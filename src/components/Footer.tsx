import { Smartphone, Tablet, Laptop, Watch, Headphones, Mail, Phone, CreditCard } from 'lucide-react';

const productNav = [
    { name: 'iPhone', icon: Smartphone },
    { name: 'iPad', icon: Tablet },
    { name: 'Mac', icon: Laptop },
    { name: 'Watch', icon: Watch },
    { name: 'AirPods', icon: Headphones },
];

const shopLinks = [
    'iPhone', 'iPad', 'Mac', 'Watch', 'AirPods', 'Accessories', 'Protection'
];

const aboutLinks = [
    'About Us', 'Careers', 'Terms of Service', 'Privacy Policy'
];

export function Footer() {
    return (
        <footer className="bg-[#1D1D1F] pt-16 pb-8 border-t border-gray-800 text-white">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                {/* Top Navigation Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pb-12 border-b border-gray-800 gap-8">
                    {/* Logo Placeholder */}
                    <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-2xl tracking-tighter text-white">iVenus</span>
                        <span className="bg-white text-black text-[10px] uppercase font-bold px-2 py-0.5 rounded-full tracking-wider">Premium Partner</span>
                    </div>

                    {/* Product Icons Nav */}
                    <nav className="flex flex-wrap justify-center gap-8 md:gap-12">
                        {productNav.map((item) => (
                            <a key={item.name} href="#" className="flex flex-col items-center gap-2 group">
                                <div className="bg-white/10 p-3 rounded-full shadow-sm group-hover:bg-white/20 transition-all text-gray-300 group-hover:text-white">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <span className="text-xs font-semibold text-gray-400 group-hover:text-white transition-colors">{item.name}</span>
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-12">

                    {/* Column 1: Shop */}
                    <div className="md:col-span-3">
                        <h3 className="font-display font-bold text-lg mb-6 text-white">Shop with iVenus</h3>
                        <ul className="space-y-3">
                            {shopLinks.map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2: About */}
                    <div className="md:col-span-3">
                        <h3 className="font-display font-bold text-lg mb-6 text-white">About iVenus</h3>
                        <ul className="space-y-3">
                            {aboutLinks.map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="md:col-span-6 bg-white/5 p-8 rounded-2xl border border-white/10">
                        <h3 className="font-display font-bold text-xl mb-6 text-white">Contact Us</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

                            <div className="space-y-1">
                                <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Sales Query</p>
                                <a href="tel:+919712000979" className="flex items-center gap-2 font-display font-bold text-lg text-white hover:text-gray-300 transition-colors">
                                    <Phone className="w-5 h-5" /> +91 97120 00979
                                </a>
                            </div>

                            <div className="space-y-1">
                                <p className="text-xs font-bold uppercase tracking-wider text-gray-500">General Query</p>
                                <a href="mailto:customercare@ivenus.in" className="flex items-center gap-2 font-display font-bold text-lg text-white hover:text-gray-300 transition-colors">
                                    <Mail className="w-5 h-5" /> customercare@ivenus.in
                                </a>
                            </div>

                            <div className="space-y-1 sm:col-span-2">
                                <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Service Query</p>
                                <a href="#" className="flex items-center gap-2 font-display font-bold text-lg text-white hover:text-gray-300 transition-colors">
                                    Click here for contact details
                                </a>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© 2025 iVenus. All Rights Reserved</p>
                    <div className="flex gap-6">
                        <CreditCard className="w-6 h-6 opacity-50" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
