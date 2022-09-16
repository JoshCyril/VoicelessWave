import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  newChatMsg: string|any;
  name: string|any;

  form = new FormGroup({
    chatMsg: new FormControl('', Validators.required)
  });

  get f(){
    console.log(this.form.controls);
    return this.form.controls;
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.name = localStorage.getItem('uname')
    if (this.name == ""){
      this.router.navigate(['/welcome']);
    }

  }

  submit(){
    if (this.form.value.chatMsg !== ""){
      console.log("Message Sent!")
    }
  }

  addWave(){
    
    this.newChatMsg = "👋 from [" + this.name +"]"
    
    this.form = new FormGroup({
      chatMsg: new FormControl(this.newChatMsg),
    });
    
  }

  // @HostListener('window:keyup', ['$event'])
  // keyEvent(event: KeyboardEvent) {

  //   if (event.key === 'Enter') {
  //     this.submit();
  //   }
  // }
    
}
