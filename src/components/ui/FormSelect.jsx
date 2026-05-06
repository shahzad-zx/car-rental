import { ChevronDown } from "lucide-react";

export const FormSelect = ({ options, placeholder, bg = "bg-gray-50", textColor = "text-gray-600" }) => (
  <div className="relative">
    <select className={`w-full appearance-none ${bg} border border-gray-100 ${textColor} py-3 px-4 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500`}>
      <option>{placeholder}</option>
      {options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
    </select>
    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
  </div>
);