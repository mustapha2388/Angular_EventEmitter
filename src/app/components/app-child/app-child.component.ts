import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.css']
})
export class AppChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() valueChange = new EventEmitter();
  
  counter = 0;


  improveCounter() { // You can give any function name
     // this.counter = this.counter + 1;
      this.valueChange.emit(this.counter);
  }


}
