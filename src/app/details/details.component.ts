import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '@angular/compiler';
@Component({
  selector: 'app-details',
  template: `<p>Posted by: {{quote[id].poster}}<p>`,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() quote:any;
  @Input() id:any;
  constructor() { }

  ngOnInit(): void {
  }

}
