import { useState } from 'react';
import { Pencil, Check, X } from 'lucide-react';

interface AddressCardProps {
    title: string;
    initialName: string;
    initialAddress: string[];
    initialPhone: string;
}

function AddressCard({ title, initialName, initialAddress, initialPhone }: AddressCardProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: initialName,
        address: initialAddress.join('\n'), // Join address lines for textarea editing
        phone: initialPhone
    });

    const handleSave = () => {
        setIsEditing(false);
        // In a real app, this would trigger an API call
    };

    const handleCancel = () => {
        setFormData({
            name: initialName,
            address: initialAddress.join('\n'),
            phone: initialPhone
        });
        setIsEditing(false);
    };

    return (
        <div className="bg-white p-6 rounded-xl border border-[#E5E5E5] flex flex-col gap-5 w-full relative">
            <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-4">
                <h3 className="text-xl font-semibold text-[#151515] tracking-tight">{title}</h3>
                {!isEditing && (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="flex items-center gap-2 text-[#525252] hover:text-[#151515] transition-colors group"
                    >
                        <span className="text-base">Change Address</span>
                        <Pencil className="w-4 h-4 group-hover:text-[#E66C17] transition-colors" />
                    </button>
                )}
            </div>

            {isEditing ? (
                <div className="flex flex-col gap-4 animate-in fade-in duration-200">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-[#151515]">Full Name</label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full border border-[#E5E5E5] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#151515] transition-colors"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-[#151515]">Address</label>
                        <textarea
                            value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            rows={3}
                            className="w-full border border-[#E5E5E5] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#151515] transition-colors resize-none"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-[#151515]">Phone Number</label>
                        <input
                            type="text"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full border border-[#E5E5E5] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#151515] transition-colors"
                        />
                    </div>

                    <div className="flex items-center gap-3 mt-2">
                        <button
                            onClick={handleSave}
                            className="bg-[#151515] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#151515]/90 transition-colors flex items-center gap-2"
                        >
                            <Check className="w-4 h-4" />
                            Save Changes
                        </button>
                        <button
                            onClick={handleCancel}
                            className="bg-gray-100 text-[#151515] text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
                        >
                            <X className="w-4 h-4" />
                            Cancel
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col gap-1 text-base text-[#151515]">
                    <p className="font-medium mb-1">{formData.name}</p>
                    {formData.address.split('\n').map((line, index) => (
                        <p key={index} className="text-[#151515]/80">{line}</p>
                    ))}
                    <p className="mt-1">{formData.phone}</p>
                </div>
            )}
        </div>
    );
}

export function AddressTab() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <AddressCard
                title="Billing address"
                initialName="Rahul Mehta"
                initialAddress={[
                    "502, Silver Arc Residency",
                    "Law College Road, Erandwane",
                    "Pune, Maharashtra 411004"
                ]}
                initialPhone="+91 98231 45670"
            />
            <AddressCard
                title="Shipping address"
                initialName="Rahul Mehta"
                initialAddress={[
                    "A-103, Sky Vista Apartments",
                    "Near Phoenix Marketcity, Viman Nagar",
                    "Pune, Maharashtra 411014"
                ]}
                initialPhone="+91 98231 45670"
            />
        </div>
    );
}
