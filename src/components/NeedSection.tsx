import { GraduationCap, Briefcase, Palette, Ghost } from 'lucide-react';
import StudentImg from '../assets/for-every-need/for-student.png';
import EnterpriseImg from '../assets/for-every-need/for-professional.png';
import CreativeImg from '../assets/for-every-need/for-creator.png';
import GamerImg from '../assets/for-every-need/for-fitness.png';

const needs = [
    {
        title: 'For Students',
        icon: GraduationCap,
        image: StudentImg,
        description: 'Power your learning journey'
    },
    {
        title: 'For Enterprise',
        icon: Briefcase,
        image: EnterpriseImg,
        description: 'Solutions for your business'
    },
    {
        title: 'For Creatives',
        icon: Palette,
        image: CreativeImg,
        description: 'Unleash your imagination'
    },
    {
        title: 'For Fitness',
        icon: Ghost,
        image: GamerImg,
        description: 'Level up your experience'
    },
];

export function NeedSection() {
    return (
        <section className="w-full">
            <h2 className="font-display text-4xl font-semibold mb-8 text-gray-900 tracking-tight">
                For Every Need
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {needs.map((item) => (
                    <div key={item.title} className="group relative h-[262px] rounded-2xl overflow-hidden cursor-pointer">
                        {/* Background Image */}
                        <img
                            src={item.image}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-colors duration-300" />

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <div className="flex items-center gap-2 mb-2">
                                <item.icon className="w-5 h-5 text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
                                <h3 className="font-display text-2xl font-bold">{item.title}</h3>
                            </div>
                            <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
