import { Component, OnInit, ViewChild, ElementRef,HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  
  @ViewChild('uname')
  nameKey!: ElementRef;

  form = new FormGroup({
    username: new FormControl('', Validators.required)
  });

  get f(){
    console.log(this.form.controls);
    return this.form.controls;
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(localStorage.getItem('uname')),
    });
  }

  submit(){
    if (this.form.value.username == ""){
      localStorage.setItem('uname',"Anonymous User")
    }else{
      localStorage.setItem('uname',this.form.value.username!)
    }
    // console.log(localStorage.getItem('uname'));

    this.router.navigate(['/chat']);
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {

    if (event.key === 'Enter') {
      this.submit();
    }
  }

}
