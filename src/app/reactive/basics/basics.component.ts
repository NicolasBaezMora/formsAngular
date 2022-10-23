import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {
/* 
  public myForm: FormGroup = new FormGroup(
    {
      name: new FormControl("RTX 4080"),
      price: new FormControl(2000000),
      stock: new FormControl(5),
    }
  ); */

  public myForm: FormGroup = this.formBuilder.group(
    {
      name: [, [Validators.required, Validators.minLength(3)]],
      price: [, [Validators.required, Validators.min(0)]],
      stock: [, [Validators.required, Validators.min(1)]]
    }
  );

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.myForm.reset(
      {
        name: "RTX 3090",
        price: 1500000,
      }
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
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }

}
