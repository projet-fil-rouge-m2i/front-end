import { StateClient } from "./StateClient.model";

export interface Client {
    id: number;
    companyName: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    zipCode: string;
    city: string;
    country: string;
    state: StateClient;
}