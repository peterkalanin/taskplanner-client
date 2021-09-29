import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  credetialsError: boolean = false;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      email: [],
      password: []
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.valid) {
      this.credetialsError = false;
      const { email, password } = this.form.value;
      this.authService.login(email, password)
        .subscribe(
          (value) => {
            if (value) {
              this.router.navigate(['/acc/dashboard'])
            }
          },
          (err) => {
            console.error(err);
            this.credetialsError = true;
          }
        )
    }
  }
}
