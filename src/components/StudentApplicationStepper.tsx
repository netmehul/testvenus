import { Check } from 'lucide-react';

interface StepperProps {
    currentStep: number;
}

const steps = [
    "Select product",
    "Register enrolment",
    "Upload document",
    "Submission overview"
];

export function StudentApplicationStepper({ currentStep }: StepperProps) {
    return (
        <div className="w-full py-8">
            <div className="flex items-center justify-between max-w-4xl mx-auto px-4">
                {steps.map((step, index) => {
                    const stepNumber = index + 1;
                    const isActive = stepNumber === currentStep;
                    const isCompleted = stepNumber < currentStep;

                    return (
                        <div key={step} className="flex flex-1 items-center last:flex-none">
                            <div className="flex flex-col items-center relative group">
                                <div className={`
                                    w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300
                                    ${isCompleted ? 'bg-[#151515] border-[#151515] text-white' :
                                        isActive ? 'bg-white border-[#151515] text-[#151515] shadow-md scale-110' :
                                            'bg-white border-gray-200 text-gray-400'}
                                `}>
                                    {isCompleted ? (
                                        <Check className="w-5 h-5" />
                                    ) : (
                                        <span className="text-sm font-semibold">{stepNumber}</span>
                                    )}
                                </div>
                                <span className={`
                                    absolute -bottom-7 text-[12px] font-medium whitespace-nowrap transition-colors duration-300
                                    ${isActive ? 'text-[#151515]' : 'text-gray-400'}
                                `}>
                                    {step}
                                </span>
                            </div>

                            {index !== steps.length - 1 && (
                                <div className="flex-1 mx-4 h-[2px] bg-gray-100 mt-[-20px]">
                                    <div className={`
                                        h-full transition-all duration-500 ease-out
                                        ${isCompleted ? 'bg-[#151515] w-full' : 'bg-gray-100 w-0'}
                                    `} />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
