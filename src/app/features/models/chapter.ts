import { Question } from "./question";

export interface Chapter {
    id: number;
    title:string;
    subchapters?: Chapter[];
    questions?: Question[];
    
    

}
