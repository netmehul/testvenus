import { useState } from 'react';
import { Upload, User, Phone, Settings, ChevronDown } from 'lucide-react';
import { useToast } from './ui/Toast';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    value: string;
}

function InputField({ label, value, className, ...props }: InputFieldProps) {
    return (
        <div className={`border border-[#E5E5E5] rounded-xl px-4 py-2.5 flex flex-col items-start bg-white focus-within:border-[#151515] transition-colors ${className}`}>
            <label className="text-[10px] text-[#525252] font-medium leading-tight">{label}</label>
            <input
                type="text"
                value={value}
                className="w-full text-base text-[#151515] placeholder-gray-400 outline-none bg-transparent font-medium mt-0.5"
                {...props}
            />
        </div>
    );
}

function SelectField({ label, value, options, onChange }: { label: string, value: string, options: string[], onChange: (val: string) => void }) {
    return (
        <div className="border border-[#E5E5E5] rounded-xl px-4 py-2.5 flex flex-col items-start bg-white focus-within:border-[#151515] transition-colors relative cursor-pointer">
            <label className="text-[10px] text-[#525252] font-medium leading-tight">{label}</label>
            <div className="w-full flex items-center justify-between mt-0.5">
                <span className="text-base text-[#151515] font-medium">{value}</span>
                <ChevronDown className="w-4 h-4 text-[#151515]" />
            </div>
            {/* Native select overlay for functionality without custom UI logic overhead */}
            <select
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
        </div>
    );
}

export function AccountDetailsTab() {
    const { showToast } = useToast();
    const [formData, setFormData] = useState({
        firstName: 'John',
        lastName: 'Doe',
        mobile: '+91 77777 77777',
        email: 'alexander.m@email.com',
        state: 'Gujarat',
        city: 'Ahmedabad',
        store: 'CG Road'
    });

    const handleChange = (field: keyof typeof formData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSave = () => {
        showToast('Profile updated successfully!', 'success');
    };

    return (
        <div className="bg-white p-8 rounded-[20px] max-w-[500px] flex flex-col gap-8 mx-auto w-full">

            {/* Avatar Section */}
            <div className="flex items-center gap-6">
                <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border-4 border-white shadow-sm">
                        {/* Placeholder Avatar */}
                        <User className="w-12 h-12 text-gray-400" />
                    </div>
                </div>
                <button className="flex items-center gap-2 bg-[#F3F3F3] hover:bg-[#E5E5E5] transition-colors px-4 py-2.5 rounded-lg text-sm font-medium text-[#151515]">
                    Upload New
                    <Upload className="w-4 h-4" />
                </button>
            </div>

            {/* Your Information */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 mb-1">
                    <User className="w-4 h-4 text-[#151515]" />
                    <h3 className="text-lg font-semibold text-[#151515]">Your information</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <InputField
                        label="First Name"
                        value={formData.firstName}
                        onChange={(e) => handleChange('firstName', e.target.value)}
                    />
                    <InputField
                        label="Last Name"
                        value={formData.lastName}
                        onChange={(e) => handleChange('lastName', e.target.value)}
                    />
                </div>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 mb-1">
                    <Phone className="w-4 h-4 text-[#151515]" />
                    <h3 className="text-lg font-semibold text-[#151515]">Contact Details</h3>
                </div>
                <InputField
                    label="Mobile No.*"
                    value={formData.mobile}
                    onChange={(e) => handleChange('mobile', e.target.value)}
                />
                <InputField
                    label="Email Address*"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                />
            </div>

            {/* Additional Info */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 mb-1">
                    <Settings className="w-4 h-4 text-[#151515]" />
                    <h3 className="text-lg font-semibold text-[#151515]">Additional Info</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <SelectField
                        label="State"
                        value={formData.state}
                        options={['Gujarat', 'Maharashtra', 'Karnataka']}
                        onChange={(val) => handleChange('state', val)}
                    />
                    <SelectField
                        label="City"
                        value={formData.city}
                        options={['Ahmedabad', 'Pune', 'Bangalore']}
                        onChange={(val) => handleChange('city', val)}
                    />
                </div>
                <SelectField
                    label="Preferred Store"
                    value={formData.store}
                    options={['CG Road', 'Law College Road']}
                    onChange={(val) => handleChange('store', val)}
                />
            </div>

            {/* Action Button */}
            <button
                onClick={handleSave}
                className="w-full bg-[#525252] text-white font-medium text-base py-3.5 rounded-xl hover:bg-[#151515] transition-colors mt-2"
            >
                Save Changes
            </button>
        </div>
    );
}
