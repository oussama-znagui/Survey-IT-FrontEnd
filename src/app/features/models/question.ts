import { Answer } from "./response"

export interface Question {

id: number
text: String
type: String
answerCount: number
answers: Answer[]
}
