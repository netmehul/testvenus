import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
    label: string;
    path?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <div className="sticky top-24 z-50 w-full flex justify-center py-4 bg-white">
            <nav className="container px-4 md:px-8 flex items-center gap-2.5">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <div key={item.label} className="flex items-center gap-2.5">
                            {isLast ? (
                                <span className="font-sans text-[14px] text-[#151515] text-opacity-40 leading-5">
                                    {item.label}
                                </span>
                            ) : (
                                <Link
                                    to={item.path || '#'}
                                    className="font-sans text-[14px] text-[#525252] leading-5 hover:text-black transition-colors"
                                >
                                    {item.label}
                                </Link>
                            )}

                            {!isLast && (
                                <ChevronRight className="w-4 h-4 text-[#525252]" />
                            )}
                        </div>
                    );
                })}
            </nav>
        </div>
    );
}
