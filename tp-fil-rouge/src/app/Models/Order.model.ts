import { Client } from "./Client.model";
import { StateOrder } from "./StateOrder.model";

export interface Order {
    id: number;
    typePresta: string;
    designation: string;
    client: Client;
    nbDays: number;
    unitPrice: number;
    totalExcludeTaxe: number; 
    totalWithTaxe: number;
    state: StateOrder;

}