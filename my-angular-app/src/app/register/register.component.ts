import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  status: any = 'true';
  myForm: FormGroup;
  constructor(public api: ApicallService,private fb: FormBuilder,public router:Router) {
    
  }
ngOnInit()
{
  this.myForm = this.fb.group({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
}

  onSubmit() {
    console.log(this.myForm)
    if (this.status) {
      this.api.register(this.myForm.value).subscribe((res: any) => {
        console.log(res)
        localStorage.setItem("accessToken",res.access_token);
        this.router.navigate(["/todo"])
      })
    }
    else {
      this.api.login(this.myForm.value).subscribe((res: any) => {
        console.log(res.message);
        localStorage.setItem("accessToken",res.access_token);
        this.router.navigate(["/todo"])
      })
    }
  }
  toggle() {
    this.status = !this.status
  }
}
