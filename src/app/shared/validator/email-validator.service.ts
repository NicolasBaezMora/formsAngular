import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  constructor(
    private http: HttpClient
  ) { }

  public validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;
    console.log("entre", email);
    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${email}`)
      .pipe(
        delay(3000),
        map(response => {
          return (response.length === 0) ? null : {emailTaken: true};
        })
      );
  }
}
