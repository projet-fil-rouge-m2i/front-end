import { Client } from "./Client.model";
import { StateOrder } from "./StateOrder.model";

export interface Order {
    id: number;
    typePresta: string;
    designation: string;
    clientId: Client;
    nbDays: number;
    unitPrice: number;
    totalExcludeTaxe: number; 
    totalWithTaxe: number;
    state: StateOrder;

}