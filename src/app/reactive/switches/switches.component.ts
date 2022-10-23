import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  public myForm: FormGroup = this.formBuilder.group(
    {
      gender: ["M", Validators.required],
      notifications: [false, Validators.required],
      conditions: [false, Validators.requiredTrue]
    }
  );

  public person = {
    gender: "F",
    notifications: true
  }

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.myForm.reset({...this.person, conditions: false});

    this.myForm.valueChanges.subscribe(
      ({gender, notifications}) => this.person = {gender, notifications}
    );

  }

  public fieldNotValid(field: string) {
    return (this.myForm.controls[field].errors
      && this.myForm.controls[field].touched);
  }

  public save() {
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    };
    const {
      gender,
      notifications
    } = this.myForm.value;

    this.person = {gender, notifications};
    console.log(this.person);
  }

}
