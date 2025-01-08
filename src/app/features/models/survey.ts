import { Edition } from "./edition";
import { Owner } from "./owner";

export interface Survey {
    id: number;
    title: string;
    description: string;
    owner: Owner;
    editions: Edition[];
}
