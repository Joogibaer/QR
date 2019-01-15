import { Component } from '@angular/core';


@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent{
//  private text: string[] = ["Develop","Deploy","Test"];
  private typewriter_text: string = "Home";
  private typewriter_display: string = "";

  typingCallback(that) {
  let total_length = that.typewriter_text.length;
  let current_length = that.typewriter_display.length;
  if (current_length < total_length) {
    that.typewriter_display += that.typewriter_text[current_length];
  } else {
    that.typewriter_display = "";
  }
  setTimeout(that.typingCallback, 400, that);
}
ngOnInit() {
  this.typingCallback(this);
}
}
