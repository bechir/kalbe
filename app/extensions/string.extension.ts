export {};

declare global {
	interface String {
		/**
		 * Capitalize string
		 */
		capitalize(): string;

		fromMoney(): number;
	}
}

String.prototype.capitalize = function (this: string): string {
	return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.fromMoney = function (this: string): number {
	return Number(this.replace(',', '.').replaceAll(' ', ''));
};
