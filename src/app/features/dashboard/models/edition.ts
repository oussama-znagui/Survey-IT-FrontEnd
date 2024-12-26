import { Survey } from "./survey";

export interface Edition {
    id: number;
    creation_date: Date;
    start_date: Date;
    survey: Survey;
    years: number;
}