import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  assignmentForm: FormGroup;

  ngOnInit(): void {
      this.assignmentForm = new FormGroup ({
        'prName': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'prStatus': new FormControl('stable')
      })
  }

  submitForm(){
    console.log(this.assignmentForm);
  }

}
