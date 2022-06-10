import { Pet } from "./Pet";

export interface Relatorio {
    id: number;
    email: string;
    price: string;
    pet: Pet;
}