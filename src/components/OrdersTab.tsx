import { useState } from 'react';
import { Search, ChevronDown, Smartphone, Tablet, Laptop, Download } from 'lucide-react';

interface OrdersTabProps {
    onOrderClick?: (orderId: string) => void;
}

export function OrdersTab({ onOrderClick }: OrdersTabProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [itemsPerPage, setItemsPerPage] = useState<number | 'All'>(10);

    const orders = [
        {
            id: '#IVN-1523-5632',
            date: 'Oct 12, 2023',
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
            date: 'Oct 14, 2023',
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
            date: 'Oct 15, 2023',
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
            date: 'Oct 18, 2023',
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
            date: 'Oct 20, 2023',
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
                return 'bg-[#EDFCF2] text-[#0F9D58] border border-[#0F9D58]/20';
            case 'Shipped':
                return 'bg-[#E0F2FE] text-[#0095FF] border border-[#0095FF]/20';
            case 'In Transit':
                return 'bg-[#FFFBEB] text-[#F59E0B] border border-[#F59E0B]/20';
            case 'Pending':
                return 'bg-[#F3F4F6] text-[#6B7280] border border-[#E5E7EB]';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="flex flex-col gap-6">
            {/* Controls Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Search */}
                <div className="relative w-full md:w-[312px]">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#151515]/40" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full h-[48px] pl-10 pr-4 rounded-xl border border-[#151515]/20 bg-transparent text-sm focus:outline-none focus:border-[#151515] transition-colors"
                    />
                </div>

                {/* Filter */}
                <div className="relative">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center justify-between px-4 h-[48px] rounded-xl border border-[#151515]/20 bg-transparent hover:border-[#151515] transition-colors min-w-[140px] group"
                    >
                        <div className="flex flex-col items-start leading-none">
                            <span className="text-[10px] text-gray-500 font-medium">Per Page</span>
                            <span className="text-sm font-medium text-[#151515]">{itemsPerPage}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-[#151515] group-hover:text-[#E86C17] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isOpen && (
                        <div className="absolute top-full right-0 mt-2 w-full bg-white border border-gray-100 rounded-xl shadow-lg z-10 overflow-hidden py-1">
                            {[5, 10, 25, 50, 100, 'All'].map((option) => (
                                <button
                                    key={option}
                                    onClick={() => {
                                        setItemsPerPage(option as number | 'All');
                                        setIsOpen(false);
                                    }}
                                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${itemsPerPage === option
                                        ? 'bg-gray-50 text-[#E86C17] font-medium'
                                        : 'text-[#151515] hover:bg-gray-50'
                                        }`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Orders Table */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/80">
                                <th className="py-4 px-6 text-sm font-semibold text-gray-400">Order Id</th>
                                <th className="py-4 px-6 text-sm font-semibold text-gray-400">Date</th>
                                <th className="py-4 px-6 text-sm font-semibold text-gray-400 text-center">Status</th>
                                <th className="py-4 px-6 text-sm font-semibold text-gray-400 text-right">Amount</th>
                                <th className="py-4 px-6 text-sm font-semibold text-gray-400 text-right pr-10">Invoice</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {orders
                                .slice(0, itemsPerPage === 'All' ? undefined : itemsPerPage)
                                .map((order) => {
                                    return (
                                        <tr
                                            key={order.id}
                                            onClick={() => onOrderClick?.(order.id)}
                                            className="hover:bg-gray-50/50 transition-colors cursor-pointer"
                                        >
                                            <td className="py-4 px-6 text-sm font-medium text-[#151515]">{order.id}</td>
                                            <td className="py-4 px-6 text-sm font-medium text-[#151515]">{order.date}</td>
                                            <td className="py-4 px-6 text-center">
                                                <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium ${getStatusStyles(order.status)}`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td className="py-4 px-6 text-sm font-medium text-[#151515] text-right">{order.amount}</td>
                                            <td className="py-4 px-6 text-right pr-6">
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        // Handle download logic
                                                    }}
                                                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#151515]/10 hover:bg-gray-50 transition-colors text-xs font-medium text-[#151515] group/btn"
                                                >
                                                    <Download className="w-3.5 h-3.5 text-gray-400 group-hover/btn:text-[#E86C17] transition-colors" />
                                                    <span>Invoice</span>
                                                </button>
                                            </td>
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
