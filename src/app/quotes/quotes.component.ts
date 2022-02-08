import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quote[] = [
    new Quote('Even the rich cry','Anonymous','James', new Date(2019,6,9),5,0),
    new Quote('It is never too late to start. Start now, start strong, but Just start.','James Brown','Brian',new Date(),15,7),      
    new Quote('Courage is built by countering adversity. Seek moments of courage','Shaolin Master','Andrew',new Date(2019,6,9),10,5),
    new Quote('The world is seeking for men, men who cannot be bought or sold','Ellen White','Brian',new Date(),15,7),
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
