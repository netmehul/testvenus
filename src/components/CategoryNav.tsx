
// Importing specific assets.
import IphoneIcon from '../assets/AssetsFromUser/Menu Icons/iphone.svg';
import IpadIcon from '../assets/AssetsFromUser/Menu Icons/ipad.svg';
import MacbookIcon from '../assets/AssetsFromUser/Menu Icons/macbook.svg';
import WatchIcon from '../assets/AssetsFromUser/Menu Icons/iwatch.svg';
import AudioIcon from '../assets/AssetsFromUser/Menu Icons/airpods.svg';
import AccessoriesIcon from '../assets/AssetsFromUser/Menu Icons/accesories.svg';
import StudentIcon from '../assets/AssetsFromUser/Menu Icons/student.svg';
import CareIcon from '../assets/AssetsFromUser/Menu Icons/carecenter.svg';
import { useNavigate } from 'react-router-dom';

const categories = [
    { name: 'iPhone', icon: IphoneIcon, path: '/category/iphone' },
    { name: 'iPad', icon: IpadIcon },
    { name: 'Macbook', icon: MacbookIcon },
    { name: 'Watch', icon: WatchIcon },
    { name: 'Audio', icon: AudioIcon },
    { name: 'Accessories', icon: AccessoriesIcon },
    { name: 'Student Offers', icon: StudentIcon },
    { name: 'Care Centers', icon: CareIcon },
];

export function CategoryNav() {
    const navigate = useNavigate();

    return (
        <div className="w-full bg-white border-b border-gray-100 py-6 overflow-x-auto">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between min-w-max gap-8 px-4">
                    {categories.map((item, index) => (
                        <div
                            key={item.name}
                            onClick={() => item.path && navigate(item.path)}
                            className={`flex flex-col items-center gap-4 group cursor-pointer min-w-[100px] ${item.path ? 'cursor-pointer' : ''}`}
                        >
                            <div className="w-16 h-16 flex items-center justify-center rounded-2xl transition-all duration-300">
                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    className="w-full h-full object-contain opacity-100 transition-opacity"
                                />
                            </div>
                            <span className="text-sm font-medium text-gray-700 font-sans tracking-wide transition-colors">
                                {item.name}
                            </span>
                            {/* Separator line for all except last item */}
                            {index < categories.length - 1 && (
                                <div className="hidden absolute right-0 h-12 w-px bg-gray-200" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
