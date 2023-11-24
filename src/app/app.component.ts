import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BindingTask';
  field1 = 'Text due to prop-binding';
  field2 = 'Text due to prop-binding';
  field3 = 'Text due to prop-binding';
  onNameChange1($event: any) {
    this.field1 = $event.target.value;
  }
  onNameChange2($event: any) {
    this.field2 = $event.target.value;
  }
  onNameChange3($event: any) {
    this.field3 = $event.target.value;
  }
}
