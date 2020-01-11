import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {User} from '../../Models/User';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../Services/user-service';
import {MustMatch} from '../../Validators/MustMatch';
import {Response} from '../../Responses/Response';
import {TournamentService} from '../../Services/tournament.service';
import {TournamentUserService} from '../../Services/tournament-user-service';
import {AppComponent} from '../../app.component';
import {DatePipe} from '@angular/common';
import {TournamentUser} from '../../Models/TournamentUser';
import Swal from "sweetalert2";

@Component({
  selector: 'app-registration-on-tournament',
  templateUrl: './registration-on-tournament.component.html',
  styleUrls: ['./registration-on-tournament.component.scss']
})
export class RegistrationOnTournamentComponent implements OnInit, OnDestroy {
  tournamentId: string;
  user: User = new User('','','','','','',null,'','');
  tournamentUser: TournamentUser = null;
  registerForm: FormGroup;
  submitted = false;
  fileToUpload: File = null;
  birthCertificateToUpload: File = null;
  payCertificateToUpload: File = null;
  previewUrl: any = '//placehold.it/150';
  previewUrlBirthCertificate: any = '//placehold.it/150';
  previewUrlPayCertificate: any = '//placehold.it/150';
  loading_reg: boolean = false;
  constructor(private userService: UserService,private formBuilder: FormBuilder, private activateRoute: ActivatedRoute
              , private tournamentService: TournamentService, private tournamentUserService: TournamentUserService, private router: Router) { this.user.id = 0 }

  get f() {
    return this.registerForm.controls;
  }

  ngOnInit() {
    this.userService.findUserByEmail(atob(sessionStorage.getItem(AppComponent.token))).then((user: User) => {
      this.user = user;
      this.previewUrl = this.getUserPhoto();
      this.userService.getUserPhoto(this.getUserPhoto()).then((file) => {
            this.fileToUpload = AppComponent.blobToFile(file,this.user.image);
      });
    });
    this.tournamentId = this.activateRoute.snapshot.paramMap.get('id');
    this.registerForm = this.formBuilder.group({
      image: ['', []],
      firstName: ['',[Validators.maxLength(255)]],
      secondName: ['', [Validators.maxLength(55)]],
      surname: ['', [Validators.maxLength(55)]],
      birthday: ['', [Validators.required]],
      city: ['', [Validators.maxLength(55)]],
      hand: ['', []],
      birth_certificate: ['', [Validators.required]],
      pay_certificate: ['', [Validators.required]],
      acceptTerms: [false, Validators.requiredTrue]
    });
  }
  ngOnDestroy() {
    this.submitted = false;
    this.registerForm.reset();
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.loading_reg = true;
    this.user.image = (this.registerForm.value.image != '') ? this.registerForm.value.image : this.user.image;
    this.user.first_name = (this.registerForm.value.firstName != '') ? this.registerForm.value.firstName : this.user.first_name;
    this.user.second_name = (this.registerForm.value.secondName != '') ? this.registerForm.value.secondName : this.user.second_name;
    this.user.surname = (this.registerForm.value.surname != '') ? this.registerForm.value.surname : this.user.surname;
    this.user.birthday = (this.registerForm.value.birthday != '') ? this.registerForm.value.birthday : this.user.birthday;
    this.user.city = (this.registerForm.value.city != '') ? this.registerForm.value.city : this.user.city;
    this.user.hand = (this.registerForm.value.hand != '') ? this.registerForm.value.hand : this.user.hand;
    this.userService.updateUser(this.user, this.fileToUpload).then((user: User) => {
        this.user = user;
        const tournamentUser = new TournamentUser(this.previewUrlBirthCertificate, this.previewUrlPayCertificate);
        this.tournamentUserService.regUserOnTournament(this.user.id.toString() ,this.tournamentId,tournamentUser
          , this.birthCertificateToUpload, this.payCertificateToUpload).then((tournamentUser: TournamentUser) => {
          if(tournamentUser === null){
            this.submitted = false;
            this.loading_reg = false;
            this.registerForm.reset();
            this.router.navigateByUrl('/tournaments/tournament/'+ this.tournamentId).then(()=>{Swal.fire({
              icon: 'warning',
              title: 'Ви вже зареєстровані на цей турнір',
              position: 'center'
              }).then();
            });
          } else {
            this.tournamentUser = tournamentUser;
            this.submitted = false;
            this.loading_reg = false;
            this.registerForm.reset();
            document.getElementById('reg_form').style.display = 'none';
            document.getElementById('successful-reg').style.display = 'block';
          }
        });
    });
  }

  fileProgress(fileInput: any, variable: string) {
    switch (variable) {
      case 'userPhoto': this.fileToUpload = <File> fileInput.target.files[0]; break;
      case 'birthCertificate': this.birthCertificateToUpload = <File> fileInput.target.files[0]; break;
      case  'payCertificate': this.payCertificateToUpload = <File> fileInput.target.files[0]; break;
    }
    this.preview(variable);
  }

  preview(variable: string) {
    let mimeType;
    let reader;
    switch (variable) {
      case 'userPhoto':  mimeType = this.fileToUpload.type;
        if (mimeType.match(/image\/*/) == null) {
          return;
        }
         reader = new FileReader(); reader.readAsDataURL(this.fileToUpload);break;
      case 'birthCertificate': mimeType = this.birthCertificateToUpload.type;
        if (mimeType.match(/image\/*/) == null) {
          return;
        }
        reader = new FileReader(); reader.readAsDataURL(this.birthCertificateToUpload);break;
      case  'payCertificate': mimeType = this.payCertificateToUpload.type;
        if (mimeType.match(/image\/*/) == null) {
          return;
        }
        reader = new FileReader(); reader.readAsDataURL(this.payCertificateToUpload); break;
    }
    reader.onload = (_event) => {
      switch (variable) {
        case 'userPhoto': this.previewUrl = reader.result; break;
        case 'birthCertificate': this.previewUrlBirthCertificate = reader.result; break;
        case  'payCertificate': this.previewUrlPayCertificate = reader.result; break;
      }
    };
  }

  getUserPhoto() {
      // if(this.user.id === undefined) return this.previewUrl;
      // if(this.user.id === 0) return  this.previewUrl;
      return  AppComponent.getPictureFromApi('user', this.user.id.toString());
      //return image === '' ? this.previewUrl : image;
  }
}
