import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quote:any = Quote;
  quotes:Quote[] = [
    new Quote('Even the rich cry','Anonymous','James', new Date(2019,6,9),0,0),
    new Quote('It is never too late to start. Start now, start strong, but Just start.','James Brown','Brian',new Date(),0,0),      
    new Quote('Courage is built by countering adversity. Seek moments of courage','Shaolin Master','Andrew',new Date(2019,6,9),0,0),
    new Quote('The world is seeking for men, men who cannot be bought or sold','Ellen White','Brian',new Date(),0,0),
  ]
  
  constructor() { }

  ngOnInit(): void {
  }
  deleteQuote(index:any){
    let toDelete = confirm(`Are you sure you want to delete this quote?`)
  
  if (toDelete){
    this.quotes.splice(index,1);
  }
}

addNewQuote(quote:any){
  quote.timePassed = new Date(quote.timePassed);
  this.quotes.push(quote);
}

addLikes(i:any){
  this.quotes[i].upVote+=1;
  }
addDislikes(i:any){
  this.quotes[i].downVote+=1;
}
}
