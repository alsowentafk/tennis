import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../../Models/User';
import {TournamentUser} from '../../../Models/TournamentUser';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../Services/user-service';
import {ActivatedRoute, Router} from '@angular/router';
import {TournamentService} from '../../../Services/tournament.service';
import {TournamentUserService} from '../../../Services/tournament-user-service';
import {AppComponent} from '../../../app.component';
import Swal from "sweetalert2";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit, OnDestroy {
  userId: string;
  photoRequired = false;
  regExpPassword = '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).*$';
  user: User = new User('','','','','','',null,'','');
  registerForm: FormGroup;
  submitted = false;
  fileToUpload: File = null;
  previewUrl: any = '//placehold.it/150';
  loading_reg: boolean = false;
  constructor(private userService: UserService,private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute
    ,private router: Router) {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  get f() {
    return this.registerForm.controls;
  }

  ngOnInit() {
    this.userService.findUserById(this.userId).then((user: User) => {
      this.user = user;
      this.previewUrl = this.getUserPhoto();
      this.userService.getUserPhoto(this.getUserPhoto()).then((file) => {
        this.fileToUpload = AppComponent.blobToFile(file,this.user.image);
      });
    });
    this.registerForm = this.formBuilder.group({
      image: ['', []],
      firstName: ['',[Validators.maxLength(255)]],
      secondName: ['', [Validators.maxLength(55)]],
      surname: ['', [Validators.maxLength(55)]],
      pass1: ['', [Validators.minLength(8), Validators.pattern(this.regExpPassword)]],
      birthday: ['', []],
      city: ['', [Validators.maxLength(55)]],
      hand: ['', []],
      acceptTerms: [false, Validators.requiredTrue]
    });
  }
  ngOnDestroy() {
    this.submitted = false;
    this.registerForm.reset();
  }

  onSubmit() {
    this.submitted = true;
    if(this.user.image === '' && this.registerForm.value.image === ''){
      this.photoRequired = true;
      return;
    }
    if (this.registerForm.invalid) {
      return;
    }
    this.loading_reg = true;
    this.user.image = (this.registerForm.value.image != '') ? this.registerForm.value.image : this.user.image;
    this.user.first_name = (this.registerForm.value.firstName != '') ? this.registerForm.value.firstName : this.user.first_name;
    this.user.second_name = (this.registerForm.value.secondName != '') ? this.registerForm.value.secondName : this.user.second_name;
    this.user.surname = (this.registerForm.value.surname != '') ? this.registerForm.value.surname : this.user.surname;
    this.user.birthday = (this.registerForm.value.birthday != '') ? this.registerForm.value.birthday : new Date(this.user.birthday);
    this.user.city = (this.registerForm.value.city != '') ? this.registerForm.value.city : this.user.city;
    this.user.hand = (this.registerForm.value.hand != '') ? this.registerForm.value.hand : this.user.hand;
    this.user.password = (this.registerForm.value.pass1 != '') ? this.registerForm.value.pass1 : this.user.password;
    this.userService.updateUser(this.user, this.fileToUpload).then((user: User) => {
      this.user = user;
      this.submitted = false;
      this.loading_reg = false;
      this.registerForm.reset();
      document.getElementById('reg_form').style.display = 'none';
      document.getElementById('successful-reg').style.display = 'block';
      });
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

  getUserPhoto() {
    return  AppComponent.getPictureFromApi('user', this.user.id.toString());
  }
  delete(){
    this.userService.delete(this.userId).then(()  => {
      this.router.navigateByUrl('/admin').then();
    })
  }
}
