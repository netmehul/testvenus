import HighEducationImg from '../assets/student-offer/high-education-img.png';
import K12EducationImg from '../assets/student-offer/k-12 education-image.png';
import UnstoppableImg from '../assets/student-offer/unstoppable-image.png';

interface EducationCardProps {
    label: string;
    title: string;
    image: string;
}

const EducationCard = ({ label, title, image }: EducationCardProps) => (
    <div className="bg-white rounded-[14px] p-[18px] flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow duration-300 w-full md:w-[424px]">
        <div className="flex flex-col gap-2">
            <span className="text-[14px] uppercase tracking-wider text-[#525252] font-medium font-display">
                {label}
            </span>
            <h3 className="text-[20px] font-semibold text-[#151515] leading-tight font-display tracking-tight">
                {title}
            </h3>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-[10px]">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
        </div>
    </div>
);

export const AppleEducationSection = () => {
    const cards = [
        {
            label: "Higher Education",
            title: "Teach. Innovate. Inspire. Every which way.",
            image: HighEducationImg
        },
        {
            label: "K–12 Education",
            title: "Ignite the creativity in every student.",
            image: K12EducationImg
        },
        {
            label: "University Students",
            title: "Unstoppable you.",
            image: UnstoppableImg
        }
    ];

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-[1320px] mx-auto">
                <div className="flex flex-col items-center text-center gap-2 mb-12 max-w-[648px] mx-auto">
                    <span className="text-[14px] text-[#151515]/60 font-medium">
                        Apple and Education
                    </span>
                    <h2 className="text-[36px] md:text-[40px] font-semibold text-[#151515] tracking-tight font-display leading-tight">
                        Inspiring every kind of mind.
                    </h2>
                    <p className="text-[12px] text-[#151515]/60 leading-relaxed font-normal">
                        Everyone has their own way of learning and expressing creativity. Apple technology and resources empower every kind of educator and every kind of student to learn, create, and define their own success. Let's move the world forward.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
                    {cards.map((card, index) => (
                        <EducationCard key={index} {...card} />
                    ))}
                </div>
            </div>
        </section>
    );
};
