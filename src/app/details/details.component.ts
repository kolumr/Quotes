import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '@angular/compiler';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() quote:any = Quote;
  constructor() { }

  ngOnInit(): void {
  }

}
