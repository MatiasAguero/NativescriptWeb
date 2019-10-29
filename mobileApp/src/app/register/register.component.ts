import { ElementRef, ViewChild, Component, OnInit } from '@angular/core';
 
import { AuthService } from '../auth/auth.service';
import { UserInfo } from '../auth/user-info';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  signupInfo: UserInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  isRegistering= false;
  errorMessage = '';

  @ViewChild("password", { static: false }) password: ElementRef;
 
  constructor(private authService: AuthService) { }

  focusPassword() {
    this.password.nativeElement.focus();
  }
 
  ngOnInit() { }
 
  onSubmit() {
    console.log(this.form);
 
    this.signupInfo = new UserInfo(
      this.form.username,
      this.form.password);
    this.isRegistering=true;
    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isRegistering=false;
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.isRegistering=false;
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
