import { MapPin, User, Wrench, ArrowUpRight, Smartphone, Tablet, Laptop } from 'lucide-react';

export function Overview() {
    const kpis = [
        { label: 'Total Orders', value: '3' },
        { label: 'Total Spend Value', value: '₹5,99,896' },
        { label: 'AppleCare+ Status', value: '2 Devices' },
        { label: 'iVenus Customer Since', value: '364 Days' },
    ];

    const actions = [
        { title: 'Update Your Address', label: 'Address', icon: MapPin },
        { title: 'Update Your Account', label: 'Account Details', icon: User },
        { title: 'Need Help With Repair?', label: 'Apple Repair', icon: Wrench },
    ];

    const orders = [
        {
            id: '#IVN-1523-5632',
            product: 'iPhone 17 Pro',
            variant: 'Cosmic Orange, 512 GB',
            status: 'Delivered',
            amount: '₹1,54,900',
            icon: Smartphone,
            color: 'bg-orange-100',
            iconColor: 'text-orange-600'
        },
        {
            id: '#IVN-1523-5633',
            product: 'iPad Pro M4',
            variant: 'Phantom Black, 256 GB',
            status: 'Shipped',
            amount: '₹1,84,999',
            icon: Tablet,
            color: 'bg-zinc-800',
            iconColor: 'text-zinc-400'
        },
        {
            id: '#IVN-1523-5634',
            product: 'Macbook Air',
            variant: 'Obsidian, 128 GB',
            status: 'In Transit',
            amount: '₹1,06,999',
            icon: Laptop,
            color: 'bg-blue-900',
            iconColor: 'text-blue-200'
        },
        {
            id: '#IVN-1523-5635',
            product: 'Macbook Pro',
            variant: 'Eternal Green, 256 GB',
            status: 'Pending',
            amount: '₹61,999',
            icon: Laptop,
            color: 'bg-green-900',
            iconColor: 'text-green-200'
        },
        {
            id: '#IVN-1523-5636',
            product: 'iPhone 16',
            variant: 'Ceramic White, 512 GB',
            status: 'Delivered',
            amount: '₹90,999',
            icon: Smartphone,
            color: 'bg-gray-100',
            iconColor: 'text-gray-600'
        },
    ];

    const getStatusStyles = (status: string) => {
        switch (status) {
            case 'Delivered':
                return 'bg-[#EDFCF2] text-[#0F9D58] border border-[#0F9D58]/20'; // Green
            case 'Shipped':
                return 'bg-[#E0F2FE] text-[#0095FF] border border-[#0095FF]/20'; // Blue
            case 'In Transit':
                return 'bg-[#FFFBEB] text-[#F59E0B] border border-[#F59E0B]/20'; // Yellow/Amber
            case 'Pending':
                return 'bg-[#F3F4F6] text-[#6B7280] border border-[#E5E7EB]'; // Gray
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="flex flex-col gap-8">
            {/* KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {kpis.map((kpi, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-2">
                        <span className="text-sm text-gray-500 font-medium">{kpi.label}</span>
                        <span className="text-2xl font-semibold text-[#151515]">{kpi.value}</span>
                    </div>
                ))}
            </div>

            {/* Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {actions.map((action, index) => {
                    const Icon = action.icon;
                    return (
                        <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between cursor-pointer group hover:border-[#525252]/30 transition-colors">
                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-semibold text-[#151515]">{action.title}</h3>
                                <div className="flex items-center gap-1 text-sm text-gray-500 group-hover:text-[#525252] transition-colors">
                                    <span>{action.label}</span>
                                    <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#E86C17]/10 transition-colors">
                                <Icon className="w-6 h-6 text-[#151515]" />
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-[#151515]">Recent Orders</h2>
                    <button className="text-[#525252] text-sm font-medium hover:underline">View all</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50">
                                <th className="py-4 px-6 text-sm font-medium text-gray-500">Order Id</th>
                                <th className="py-4 px-6 text-sm font-medium text-gray-500">Product</th>
                                <th className="py-4 px-6 text-sm font-medium text-gray-500 text-center">Status</th>
                                <th className="py-4 px-6 text-sm font-medium text-gray-500 text-right">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {orders.map((order) => {
                                const ProductIcon = order.icon;
                                return (
                                    <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-4 px-6 text-sm font-medium text-[#151515]">{order.id}</td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-4">
                                                <div className={`w-10 h-10 rounded-lg ${order.color} flex items-center justify-center`}>
                                                    <ProductIcon className={`w-6 h-6 ${order.iconColor}`} />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-semibold text-[#151515]">{order.product}</span>
                                                    <span className="text-xs text-gray-500">{order.variant}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusStyles(order.status)}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-sm font-medium text-[#151515] text-right">{order.amount}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
