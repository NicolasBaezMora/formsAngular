import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  public nameLastnamePattern = "([a-zA-Z]+) ([a-zA-Z]+)";
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  public canNotBeRengeh(control: FormControl): ValidationErrors | null {
    const value = control.value.trim().toLowerCase();
    if (value === "rengeh") return {
      invalidUsername: true
    };
    return null;
  }

  public equalFields(field1: string, field2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const pass = formGroup.get(field1)?.value;
      const confirmPass = formGroup.get(field2)?.value;

      if (pass !== confirmPass) {
        formGroup.get(field2)?.setErrors({
          invalidPasswords: true
        });

        return {
          invalidPasswords: true
        }
      }

      formGroup.get(field2)?.setErrors(null);

      return null;
    };
  }

}
