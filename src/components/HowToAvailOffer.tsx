import DownloadIcon from '../assets/student-offer/icons/1-download-print.svg';
import SelectIcon from '../assets/student-offer/icons/2-preferred-select.svg';
import RegisterIcon from '../assets/student-offer/icons/3-complete-register.svg';
import UploadIcon from '../assets/student-offer/icons/4-upload-doc.svg';
import VerificationIcon from '../assets/student-offer/icons/5-verfication-24.svg';

interface StepProps {
    number: number;
    title: string;
    subtitle?: string;
    icon: string;
}

const Step = ({ number, title, subtitle, icon }: StepProps) => (
    <div className="flex flex-col items-center text-center w-[160px] relative z-10">
        <div className="w-[88px] h-[88px] rounded-full border border-[#525252] bg-white flex items-center justify-center mb-4 transition-transform hover:scale-105">
            <img src={icon} alt={title} className="w-[50px] h-[50px] object-contain" />
        </div>
        <span className="text-[18px] font-semibold text-[#151515] mb-1">{number}</span>
        <h4 className="text-[14px] leading-[18px] font-medium text-[#151515] max-w-[120px]">
            {title}
        </h4>
        {subtitle && (
            <p className="text-[14px] leading-[18px] font-medium text-[#151515] max-w-[120px]">
                {subtitle}
            </p>
        )}
    </div>
);

export const HowToAvailOffer = () => {
    const steps = [
        {
            number: 1,
            title: "Download Print and Fill the Form",
            icon: DownloadIcon
        },
        {
            number: 2,
            title: "Select Preferred Mac Model",
            icon: SelectIcon
        },
        {
            number: 3,
            title: "Complete the Registration",
            icon: RegisterIcon
        },
        {
            number: 4,
            title: "Upload all the Documents",
            icon: UploadIcon
        },
        {
            number: 5,
            title: "Verification within 24 Hours",
            icon: VerificationIcon
        }
    ];

    return (
        <section className="py-8 px-4">
            <div className="max-w-[1200px] mx-auto">
                <h2 className="text-[36px] font-semibold text-[#151515] text-center mb-8 tracking-tight font-display">
                    How to Avail this offer
                </h2>

                <div className="relative mb-8">
                    {/* Connecting Line */}
                    <div className="absolute top-[44px] left-[80px] right-[80px] h-[1px] bg-[#E5E5E5] hidden md:block" />

                    <div className="flex flex-wrap justify-center md:justify-between gap-y-8 gap-x-2">
                        {steps.map((step) => (
                            <Step key={step.number} {...step} />
                        ))}
                    </div>
                </div>

                {/* CTA Banner */}
                <div className="bg-[#FFFFFF] border border-[#F5F5F7] rounded-[20px] p-6 md:p-6 flex flex-col md:flex-row items-center justify-between shadow-sm">
                    <h3 className="text-[24px] md:text-[24px] font-semibold text-[#151515] mb-0 md:mb-0 leading-tight">
                        Apply now for the student discount offer!
                    </h3>
                    <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                        <button className="px-8 py-4 border border-[#151515] rounded-[8px] text-[16px] font-medium text-[#151515] hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-2">
                            Download Form
                        </button>
                        <button className="px-8 py-4 bg-[#525252] rounded-[8px] text-[16px] font-medium text-white hover:bg-[#424242] transition-colors inline-flex items-center justify-center">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
