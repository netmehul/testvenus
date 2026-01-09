import {
    Smartphone,
    Tablet,
    Laptop,
    Watch,
    Music,
    Headphones,
    Phone,
    Mail,
    HelpCircle,
    Instagram,
    Facebook,
    Youtube,
    Linkedin,
    Apple
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/AssetsFromUser/logo.png';

const topNavItems = [
    // ... (rest of the imports/consts remain same until the brand section)
    { name: 'iPhone', icon: Smartphone },
    { name: 'iPad', icon: Tablet },
    { name: 'Mac', icon: Laptop },
    { name: 'Watch', icon: Watch },
    { name: 'Music', icon: Music },
    { name: 'Accessories', icon: Headphones }, // Using Headphones as proxy for Accessories or Cable
];

const socialLinks = [
    { icon: Instagram, href: '#' },
    { icon: Facebook, href: '#' },
    { icon: Youtube, href: '#' },
    { icon: Linkedin, href: '#' },
];

const usefulLinks = [
    'About Us', 'Blogs', 'Service Centers', 'Care Plan Coverage', 'FAQs', 'Career Opportunity', 'Student Offer'
];

const policyLinks = [
    'Disclaimer Policy', 'Terms and Conditions', 'Cancellation Returns and Refund', 'Shipping and Delivery Policy', 'Privacy Policy', 'Prebooking Terms and Conditions', 'Security'
];

export function Footer() {
    return (
        <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-900">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

                {/* Top Section */}
                <div className="flex flex-col xl:flex-row justify-between items-center gap-8 pb-10 border-b border-gray-800">

                    {/* Brand / Partner */}
                    <div className="flex items-center gap-6">
                        <Link to="/">
                            <img src={Logo} alt="iVenus Logo" className="h-10 md:h-12 w-auto object-contain invert brightness-0" />
                        </Link>
                        {/* <div className="hidden sm:block w-px h-10 bg-gray-700"></div> */}

                    </div>

                    {/* Product Nav */}
                    <nav className="flex flex-wrap justify-center gap-6 sm:gap-10">
                        {topNavItems.map((item) => (
                            <a key={item.name} href="#" className="flex items-center gap-3 group">
                                <item.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{item.name}</span>
                            </a>
                        ))}
                    </nav>

                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 py-16">

                    {/* Socials */}
                    <div className="lg:col-span-3 space-y-6">
                        <h3 className="font-bold text-lg text-white">Socials</h3>
                        <div className="flex gap-4">
                            {socialLinks.map((social, idx) => (
                                <a key={idx} href={social.href} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/5">
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div className="lg:col-span-2 space-y-6">
                        <h3 className="font-bold text-lg text-white">Useful Links</h3>
                        <ul className="space-y-3">
                            {usefulLinks.map((link) => (
                                <li key={link}>
                                    {link === 'Student Offer' ? (
                                        <Link to="/student-offers" className="text-sm text-gray-400 hover:text-white transition-colors">{link}</Link>
                                    ) : (
                                        <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{link}</a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Policies */}
                    <div className="lg:col-span-3 space-y-6">
                        <h3 className="font-bold text-lg text-white">Policies</h3>
                        <ul className="space-y-3">
                            {policyLinks.map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-4 space-y-8 pl-0 lg:pl-8">

                        <div className="flex gap-4 items-start">
                            <Phone className="w-6 h-6 text-gray-500 mt-1" />
                            <div>
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Sales Query</p>
                                <a href="tel:+919712000979" className="text-xl font-medium text-white hover:text-gray-300 transition-colors">+91 97120 00979</a>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <Mail className="w-6 h-6 text-gray-500 mt-1" />
                            <div>
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">General Query:</p>
                                <a href="mailto:customercare@ivenus.in" className="text-lg font-medium text-white hover:text-gray-300 transition-colors break-all">customercare@ivenus.in</a>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <HelpCircle className="w-6 h-6 text-gray-500 mt-1" />
                            <div>
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Service Query</p>
                                <a href="#" className="text-lg font-medium text-white hover:text-gray-300 transition-colors">Click here for contact details</a>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-900 text-center">
                    <p className="text-sm text-gray-500">Copyright©2025 iVenus. All Rights Reserved</p>
                </div>

            </div>
        </footer>
    );
}
