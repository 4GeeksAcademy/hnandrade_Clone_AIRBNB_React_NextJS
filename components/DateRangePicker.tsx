"use client";

import "react-day-picker/style.css";
import { useState } from "react";
import { DayPicker, type DateRange } from "react-day-picker";
import { es } from "react-day-picker/locale";
import { formatDate, getNights } from "@/utils/booking";

interface DateRangePickerProps {
	range: DateRange | undefined;
	onChange: (range: DateRange | undefined) => void;
}

const DateRangePicker = ({ range, onChange }: DateRangePickerProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const today = new Date();
	today.setHours(0, 0, 0, 0);

	const handleSelect = (nextRange: DateRange | undefined) => {
		onChange(nextRange);
		if (getNights(nextRange?.from, nextRange?.to) > 0) setIsOpen(false);
	};

	return (
		<div className="relative">
			<div className="grid grid-cols-2 overflow-hidden rounded-xl border border-neutral-300">
				<button aria-expanded={isOpen} className="min-w-0 px-3 py-3 text-left" onClick={() => setIsOpen((open) => !open)} type="button">
					<span className="block text-[10px] font-bold uppercase">Llegada</span>
					<span className="block truncate text-sm">{range?.from ? formatDate(range.from) : "Agregar fecha"}</span>
				</button>
				<button aria-expanded={isOpen} className="min-w-0 border-l border-neutral-300 px-3 py-3 text-left" onClick={() => setIsOpen((open) => !open)} type="button">
					<span className="block text-[10px] font-bold uppercase">Salida</span>
					<span className="block truncate text-sm">{range?.to ? formatDate(range.to) : "Agregar fecha"}</span>
				</button>
			</div>
			{isOpen && (
				<div className="absolute left-0 top-full z-20 mt-2 w-max max-w-[calc(100vw-2rem)] rounded-xl border border-neutral-200 bg-white p-2 shadow-xl">
					<DayPicker
						className="[--rdp-day-width:38px] [--rdp-day-height:38px] [--rdp-day_button-width:36px] [--rdp-day_button-height:36px] text-sm text-neutral-800"
						disabled={{ before: today }}
						locale={es}
						mode="range"
						numberOfMonths={1}
						onSelect={handleSelect}
						selected={range}
					/>
				</div>
			)}
		</div>
	);
};

export default DateRangePicker;