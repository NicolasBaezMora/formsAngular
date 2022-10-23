import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from '../../shared/validator/email-validator.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService
  ) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: "Nicolas Baez",
      email: "test1@test.com",
      username: "Niko",
      password: "123456",
      confirmPassword: "123456"
    });
  }
  /* 
    private nameLastnamePattern = "([a-zA-Z]+) ([a-zA-Z]+)";
    private emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
   */
  /* 
    public canNotBeRengeh(control: FormControl) {
      const value = control.value.trim().toLowerCase();
      if(value === "rengeh") return {
        invalidUsername: true
      };
      return null;
    }
   */
  public myForm: FormGroup = this.formBuilder.group(
    {
      name: [
        "",
        [
          Validators.required,
          Validators.pattern(this.validatorService.nameLastnamePattern)
        ]
      ],
      email: [
        "",
        [
          Validators.required,
          Validators.pattern(this.validatorService.emailPattern)
        ],
        [
          this.emailValidator
        ]
      ],
      username: [
        "",
        [
          Validators.required,
          this.validatorService.canNotBeRengeh
        ]
      ],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ],
      confirmPassword: [
        "",
        [
          Validators.required
        ]
      ]
    },
    {
      validators: [
        this.validatorService.equalFields("password","confirmPassword")
      ]
    }
  );

  get emailErrorMessage(): string {
    const emailErrors = this.myForm.get("email")?.errors;
    if(emailErrors?.["required"]) return "Email is required"
    if(emailErrors?.["pattern"]) return "Email invalid"
    if(emailErrors?.["emailTaken"]) return "Email is already in use"
    return "";
  }

  public emailRequired() {
    return this.myForm.get("email")?.errors?.["required"]
      && this.myForm.get("email")?.touched;
  }

  public emailFormat() {
    return this.myForm.get("email")?.errors?.["pattern"]
      && this.myForm.get("email")?.touched;
  }

  public emailUsed() {
    return this.myForm.get("email")?.errors?.["emailTaken"]
      && this.myForm.get("email")?.touched;
  }

  public fieldNotValid(field: string) {
    return this.myForm.get(field)?.invalid
      && this.myForm.get(field)?.touched;
  }

  public submitForm() {
    console.log(this.myForm.value);
    this.myForm.markAllAsTouched();
  }

}
