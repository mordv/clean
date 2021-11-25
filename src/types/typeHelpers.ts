export const isValued = <T>(val?: T | null | undefined): val is T => val !== undefined && val !== null;
