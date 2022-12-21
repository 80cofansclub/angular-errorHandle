import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  test() {
    console.log(`This is error test`);
    let a = { t: undefined, b: '123' };

    JSON.parse(a.t!);

    a.b.toString();

    // throw new Error(`This is error test`);
  }
}
