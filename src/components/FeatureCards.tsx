import { MapPin, Tag, Rocket, Clock, ChevronRight } from 'lucide-react';

// FeatureCardProps interface removed as it was unused with the current static implementation

const features = [
    { title: 'Find your nearest store', icon: MapPin },
    { title: 'Best deals', icon: Tag },
    { title: 'Browse latest launches', icon: Rocket },
    { title: 'Pre order', icon: Clock },
];

export function FeatureCards() {
    return (
        <div className="flex flex-col gap-4 w-full md:w-[424px]">
            {features.map((feature, index) => (
                <div
                    key={index}
                    className="group flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-50/50 transition-all duration-300 cursor-pointer h-[76px]"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-[42px] h-[42px] rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-indigo-50 transition-colors">
                            <feature.icon className="w-5 h-5 text-gray-600 group-hover:text-indigo-600 transition-colors" />
                        </div>
                        <span className="font-display font-semibold text-lg text-gray-900 leading-6">
                            {feature.title}
                        </span>
                    </div>
                    <div className="w-6 h-6 flex items-center justify-center text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all">
                        <ChevronRight className="w-5 h-5" />
                    </div>
                </div>
            ))}
        </div>
    );
}
