import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  formError = {
    passwordMatch: false,
    existingEmail: false
  }

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      email: [],
      password: [],
      passwordRepeat: []
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.form.valid) {
      this.formError.existingEmail = false;
      const { email, password } = this.form.value;
      this.authService.register(email, password)
        .subscribe(
          (value) => {
            if (value) {
              this.router.navigate(['../login'], { relativeTo: this.route })
            }
          },
          (err) => {
            console.error(err);
            this.formError.existingEmail = true;
          }
        )
    }
  }

}
