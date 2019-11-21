import { ElementRef, ViewChild, Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { UserInfo } from '../auth/user-info';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signupInfo: UserInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  isRegistering= false;
  user: string;
  pass: string;
  errorMessage = '';

  @ViewChild("passwrd", { static: false }) passwrd: ElementRef;
 
  constructor(private authService: AuthService) { 
  
 
  }

  focusPassword() {
    this.passwrd.nativeElement.focus();
  }
 
  ngOnInit() { 
  
	
  }
 
  onSubmit() {
 
    this.signupInfo = new UserInfo(
      this.user,
      this.pass);
    alert(this.user);
    alert(this.pass);
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
