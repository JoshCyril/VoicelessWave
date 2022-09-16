import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('', Validators.required)
  });

  get f(){
    console.log(this.form.controls);
    return this.form.controls;
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('uname') == ""){
      this.router.navigate(['/welcome']);
    }

  }

  submit(){

  }
}
