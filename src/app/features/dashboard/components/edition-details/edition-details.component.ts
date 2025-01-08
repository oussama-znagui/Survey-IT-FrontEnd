import { Component, Signal, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditionService } from '../../../services/edition.service';
import { Edition } from '../../../models/edition';
import { Chapter } from '../../../models/chapter';
import { SubjectsTreeComponent } from '../subjects-tree/subjects-tree.component';
import { QuestionsListComponent } from '../questions-list/questions-list.component';
import { Title } from '@angular/platform-browser';
import { ResponsesListComponent } from '../responses-list/responses-list.component';

@Component({
  selector: 'app-edition-details',
  imports: [SubjectsTreeComponent,QuestionsListComponent,ResponsesListComponent],
  templateUrl: './edition-details.component.html',
  styleUrl: './edition-details.component.css'
})
export class EditionDetailsComponent {

  id!: number;
  edition!: Edition
  errorMessage: string | undefined;
  chapterQ: Chapter = {id: 1, title:'allo'}; 
  chapterSignal: WritableSignal<Chapter> = signal({id:0,title:"wallo"}) ;
  dataFromChild1 = signal<Chapter>({id:0,title:"allo"});
  a: number = 0;
  selectedQuestion = signal<any>(null);
 

  constructor(private route: ActivatedRoute,private service: EditionService){

  }
  ngOnInit(){
    console.log("allo")


    this.route.params.subscribe({
      next: (params) => {
        this.id = +params['id'];
        if (this.id) {
          this.loadEdition(this.id);
        }
      },
      error: (error) => {
        console.error('Erreur de route:', error);
      }
    });

  }

  loadEdition(id: number): void {
    this.service.getEditionDate(id).subscribe({
      next: (data) => {
        this.edition = data;
      },
      error: (error) => {
        console.error('Error fetching edition:', error);
      }
    });

    
}

receiveChapter(chapter: Chapter){
  console.log("parent", this.chapterQ)
  this.chapterQ=chapter
  this.chapterSignal.set(chapter);

}

updateDataFromChild1(data: Chapter) {
  this.dataFromChild1.set(data);
}

onQuestionSelect(question: any) {
  this.selectedQuestion.set(question);
}

onBackToQuestions() {
  this.selectedQuestion.set(null);
}

}
