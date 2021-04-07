import { Component, OnInit } from '@angular/core';
import { Question } from "../question.model";
import { QuizService } from "../quiz.service";


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  flag1:boolean = true;
  flag2:boolean = false;
  flag3:boolean = false;
  msg:string = "";
  answer:string ="";
  questionNumber = 0;
  answered:number = 0;
  correct:number = 0;
  quizAnswers:Array<string> = ["","","","","","","","","",""];
  quizQuestions:Array<Question> = [];
  currentQuestion: Question = new Question("How many legs does the legs of Man have?","one","two","three", "c");
  
  //DI : pull the object from container. 
  constructor(public service:QuizService) { }

  ngOnInit(): void {
    this.service.loadQuestionsData().subscribe(data=> this.quizQuestions=data);
    console.log("In quiz.component. data loaded!")

  }

  goToQuiz(){
    this.flag1 = !this.flag1;
    this.flag2 = !this.flag2;
  }

   prevQuestion(){
    if(this.questionNumber > 0)
    {
       this.msg = "";
       this.questionNumber--;
       this.currentQuestion = this.quizQuestions[this.questionNumber];
    }
    else
    {
      this.msg = "This is the first question. Click next to go to the next question...";
    }
   }


  
  nextQuestion(){
   if(this.questionNumber < 9)
   {
      this.msg = "";
      this.questionNumber++;
      this.currentQuestion = this.quizQuestions[this.questionNumber];  
     
   }
   else
   {
     this.msg = "You reached the end of this quiz. Click finish to see your report...";
   }
  }


  saveAnswer(value:any)
  {
    this.quizAnswers[this.questionNumber] = value.a;
    console.log(" Value is : ", value.a );
    this.nextQuestion();
    
  }

  
  totalAnswered()
  {
    this.answered = 0;
    for(let i=0; i<10; i++)
    {
      if(this.quizAnswers[i] != "")
        this.answered++;
    }
  }

   
   correctAnswered()
   {
     this.correct = 0;
     for(let i=0; i<10; i++)
     {
       if(this.quizAnswers[i] == this.quizQuestions[i].correct)
         this.correct++;
     }
   }

   
   takeAgain()
   {
      this.flag1 = !this.flag1;
      this.flag3 = !this.flag3;
      this.questionNumber = 0;
      this.answered = 0;
      this.correct = 0;
      this.msg = "";
      this.quizAnswers = ["","","","","","","","","",""];
      this.currentQuestion = new Question("How many legs does the legs of Man have?","one","two","three", "c");

   }   
  finish()
  {
    this.flag2 = !this.flag2;
    this.flag3 = !this.flag3;
   
      this.totalAnswered();
      this.correctAnswered();
    
  }
}
