export {};

declare global {
	interface Number {
		/**
		 * Format number with thousands separator
		 */
		withSeparator(separator: string): string;

		/**
		 * Format phone number
		 */
		phoneFormat(): string;

		/**
		 * Format number to money format with separator and fixed to 2
		 */
		toMoney(): string;
	}
}

Number.prototype.withSeparator = function (this: number, separator: string): string {
	return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};

Number.prototype.phoneFormat = function (this: number): string {
	return this.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ' ');
};

Number.prototype.toMoney = function (this: number): string {
	return Number(this.toFixed(3)).withSeparator(' ');
};
