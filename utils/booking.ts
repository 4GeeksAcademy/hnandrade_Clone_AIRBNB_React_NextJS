const millisecondsPerDay = 24 * 60 * 60 * 1000;

const getCalendarDay = (date: Date) => Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());

export const getNights = (from?: Date, to?: Date): number => {
	if (!from || !to) return 0;

	const startDay = getCalendarDay(from);
	const endDay = getCalendarDay(to);
	return endDay > startDay ? (endDay - startDay) / millisecondsPerDay : 0;
};

export const getTotal = (pricePerNight: number, nights: number): number => pricePerNight * nights;

export const formatDate = (date: Date): string => new Intl.DateTimeFormat("es-MX", {
	day: "numeric",
	month: "short",
}).format(date).replace(/\.$/, "");