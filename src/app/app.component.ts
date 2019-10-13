import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngviacli';

  displayCounter(count) {
    console.log(count);
  }

  getData(datas) {
    console.log("From AppComponent event == " + datas);
  }

}
