import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-child',
  templateUrl: './form-child.component.html',
  styleUrls: ['./form-child.component.css']
})
export class FormChildComponent implements OnInit {

  @Output() myEmitter = new EventEmitter();

  @Output() valueChange = new EventEmitter();


  password:string = "your password plz !";
  email:string ='your email plz !';

  constructor() { }

  ngOnInit() {
  }

  sendData(){
    console.log(this.email);
    console.log(this.password);
    this.myEmitter.emit(this.email); 
    this.myEmitter.emit(this.password); 
  }

}
