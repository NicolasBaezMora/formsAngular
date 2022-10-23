import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent implements OnInit {

  public myForm: FormGroup = this.formBuilder.group(
    {
      name: ["", [Validators.required, Validators.minLength(3)]],
      favorites: this.formBuilder.array(
        [
          ["Metal gird", Validators.required],
          ["Battlefield", Validators.required]
        ],
        Validators.required
      )
    }
  );

  public newFavorite: FormControl = this.formBuilder.control(
    "",
    [
      Validators.required
    ]
  );

  get favoritesArray() {
    return this.myForm.get('favorites') as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  public fieldNotValid(field: string) {
    return (this.myForm.controls[field].errors
      && this.myForm.controls[field].touched);
  }

  public save() {
    if(this.myForm.invalid) {
      console.log("errores: ", this.myForm.controls['favorites'].errors)
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value)
  }

  public addGame() {
    if(this.newFavorite.invalid) return;

    this.favoritesArray.push(
      this.formBuilder.control(
        this.newFavorite.value,
        Validators.required
      )
    );

    this.newFavorite.reset();

  }

  public remove(index: number) {
    this.favoritesArray.removeAt(index);
  }

}
