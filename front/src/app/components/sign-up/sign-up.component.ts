import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../Models/User';
import {MustMatch} from '../../Validators/MustMatch';
import {Response} from '../../Responses/Response';
import {UserService} from '../../Services/user-service';
import {Router} from '@angular/router';
import * as uuid from 'uuid';
import path from 'path'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {
  regExpEmail = '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])';
  regExpPassword = '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).*$';
  user: User = new User('','','','','','',null,'','');
  EmailExist = false;
  registerForm: FormGroup;
  confirmationForm: FormGroup;
  confirmationForm_submitted = false;
  invalidCode = false;
  submitted = false;
  fileToUpload: File = null;
  previewUrl: any = '//placehold.it/150';
  loading_reg: boolean = false;
  loading_confirm: boolean = false;
  constructor(private userService: UserService,private formBuilder: FormBuilder, private router: Router) { }

  get f() {
    return this.registerForm.controls;
  }

  get confirmation_form() {
    return this.confirmationForm.controls;
  }

  ngOnInit() {
    //registration form validation
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern(this.regExpEmail)]],
      pass1: ['', [Validators.required, Validators.minLength(8), Validators.pattern(this.regExpPassword)]],
      pass2: ['', [Validators.required]],
      image: ['', [Validators.required]],
      firstName: ['',[Validators.required, Validators.maxLength(255)]],
      secondName: ['', [Validators.required, Validators.maxLength(55)]],
      surname: ['', [Validators.required, Validators.maxLength(55)]],
      birthday: ['', [Validators.required]],
      city: ['', [Validators.required, Validators.maxLength(55)]],
      hand: ['', [Validators.required]],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validator: [MustMatch('pass1', 'pass2')]
    });
    //confirmation form validation
    this.confirmationForm = this.formBuilder.group({
      code: ['', [Validators.required, Validators.minLength(8),Validators.maxLength(255)]],
    });
  }
  ngOnDestroy() {
    this.submitted = false;
    this.registerForm.reset();
    this.confirmationForm_submitted = false;
    this.confirmationForm.reset();
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid || this.EmailExist === true) {
      return;
    }
    this.loading_reg = true;
    const fileName = uuid.v4().toString();
    const fileExt = path.extname(this.fileToUpload.name);
    const fullFileName = fileName + fileExt;
    const newFile: File = new File([this.fileToUpload], fullFileName, {type: this.fileToUpload.type});
    this.user = new User(this.registerForm.value.email,  this.registerForm.value.pass1, newFile.name
      , this.registerForm.value.firstName, this.registerForm.value.secondName, this.registerForm.value.surname
      , this.registerForm.value.birthday, this.registerForm.value.city, this.registerForm.value.hand);
    this.userService.registerNewUser(this.user, newFile).then((response: Response) => {
      if (response.status === 500 && response.message === 'Account already exists') {
        this.EmailExist = true;
        this.loading_reg = false;
      }
      else if (response.status === 200 && response.user !== null) {
        this.user = response.user;
        this.submitted = false;
        this.loading_reg = false;
        this.registerForm.reset();
         document.getElementById('reg_form').style.display = 'none';
         document.getElementById('after_reg_form').style.display = 'block';
      }
    });
  }
  onSubmitConfirmForm(){
    this.confirmationForm_submitted = true;
    if (this.confirmationForm.invalid || this.EmailExist === true) {
      return;
    }
    this.loading_confirm = true;
    this.userService.confirmAccount(this.confirmationForm.value.code.replace(/\s+/g,' '))
      .then((response: Response)=>{
      if (response.status === 500 && response.message === 'Error') {
        this.invalidCode = true;
        this.loading_confirm = false;
      }
      else if (response.status === 200 && response.user !== null) {
        this.confirmationForm_submitted = false;
        this.invalidCode = false;
        this.confirmationForm.reset();
        this.loading_confirm = false;
         document.getElementById('after_reg_form').style.display = 'none';
         document.getElementById('successful-reg').style.display = 'block';
      }
    })
  }

  sendCodeOneMore() {
    this.userService.sendCodeOneMore(this.user.id.toString()).then();
  }

  checkExistingEmail(event) {
    this.userService.checkExistUserByEmail(event.target.value).then((response: boolean) => {
        this.EmailExist = response === true;
      }
    );
  }
  fileProgress(fileInput: any) {
    this.fileToUpload = <File> fileInput.target.files[0];
    this.preview();
  }

  preview() {
    const mimeType = this.fileToUpload.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    let reader = new FileReader();
    reader.readAsDataURL(this.fileToUpload);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    };
  }
}
