import { StateOrder } from "./StateOrder.model";

export interface OrderPost {
    typePresta: string;
    designation: string;
    idClient: number;
    nbDays: number;
    unitPrice: number;
    totalExcludeTaxe: number; 
    totalWithTaxe: number;
    state: StateOrder;
}