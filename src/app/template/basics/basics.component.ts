import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  @ViewChild("myForm") public myForm!: NgForm;

  public initForm = {
    product: "",
    price: 0,
    stock: 0
  };

  constructor() { }

  ngOnInit(): void {



  }

  public productNameValid(): boolean {
    return (this.myForm?.controls['product']?.invalid && 
      this.myForm?.controls['product']?.touched);
  }

  public priceValid(): boolean { 
    return (this.myForm?.controls['price']?.touched &&
      (this.myForm?.controls['price']?.value < 0 || !this.myForm?.controls['price']?.value));
  }

  public save() {
    console.log(this.myForm)
    this.myForm.resetForm(
      {
        price: 0,
        stock: 0
      }
    );
  }


}
