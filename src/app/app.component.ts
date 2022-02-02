import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  assignmentForm: FormGroup;
  forbiddenName = ['Test'];

  ngOnInit(): void {
      this.assignmentForm = new FormGroup ({
        'prName': new FormControl(null, [Validators.required, this.noName.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'prStatus': new FormControl('stable')
      })
  }

  submitForm(){
    console.log('Project name is:', this.assignmentForm.value.prName);
    console.log('Your email is:', this.assignmentForm.value.email);
    console.log('Project status is:', this.assignmentForm.value.prStatus);
  }

  noName(control: FormControl): {[s:string]:boolean} {
    if(this.forbiddenName.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true};
    }
    return null;
  }

}
