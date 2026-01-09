import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { VariantSelector, type VariantOption } from './VariantSelector';

export interface VariantGroup {
    id: string;
    label: string;
    type: 'color' | 'text' | 'coverage';
    options: VariantOption[];
    selectedId: string | number;
}

interface VariantSliderProps {
    groups: VariantGroup[];
    onSelect: (groupId: string, option: VariantOption) => void;
}

export function VariantSlider({ groups, onSelect }: VariantSliderProps) {
    const [currentStep, setCurrentStep] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const activeGroup = groups[currentStep];

    const handleNext = () => {
        if (currentStep < groups.length - 1) {
            triggerTransition(currentStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            triggerTransition(currentStep - 1);
        }
    };

    const triggerTransition = (nextStep: number) => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentStep(nextStep);
            setIsAnimating(false);
        }, 200); // Small delay for smooth feel
    };

    const handleOptionSelect = (option: VariantOption) => {
        onSelect(activeGroup.id, option);

        // Auto progress to next step if available
        if (currentStep < groups.length - 1) {
            setTimeout(() => {
                handleNext();
            }, 300); // Short delay so user sees their selection
        }
    };

    if (!activeGroup) return null;

    return (
        <div className="flex flex-col gap-6">
            {/* Slider Header */}
            <div className="flex items-center justify-between">
                <span className="text-base lg:text-lg font-semibold text-[#151515]">
                    {activeGroup.label}
                </span>

                <div className="flex items-center gap-6">
                    {/* Dots */}
                    <div className="flex gap-1.5">
                        {groups.map((_, idx) => (
                            <div
                                key={idx}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentStep ? 'bg-gray-900 w-3' : 'bg-gray-200'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Navigation */}
                    <div className="flex gap-2">
                        <button
                            onClick={handleBack}
                            disabled={currentStep === 0}
                            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all
                                ${currentStep === 0
                                    ? 'bg-gray-50 text-gray-300 cursor-not-allowed'
                                    : 'bg-white border border-gray-100 text-gray-600 hover:border-gray-300 shadow-sm'
                                }
                            `}
                        >
                            <ChevronRight className="w-4 h-4 rotate-180" />
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={currentStep === groups.length - 1}
                            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all
                                ${currentStep === groups.length - 1
                                    ? 'bg-gray-50 text-gray-300 cursor-not-allowed'
                                    : 'bg-white border border-gray-100 text-gray-600 hover:border-gray-300 shadow-sm'
                                }
                            `}
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Slider Content */}
            <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
                <VariantSelector
                    options={activeGroup.options}
                    selectedId={activeGroup.selectedId}
                    onSelect={handleOptionSelect}
                    type={activeGroup.type}
                />
            </div>
        </div>
    );
}
