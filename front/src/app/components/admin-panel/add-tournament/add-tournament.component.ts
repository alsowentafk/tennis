import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TournamentService} from '../../../Services/tournament.service';
import {MustMatch} from '../../../Validators/MustMatch';
import {User} from '../../../Models/User';
import {Response} from '../../../Responses/Response';
import {Tournament} from '../../../Models/Tournament';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-tournament',
  templateUrl: './add-tournament.component.html',
  styleUrls: ['./add-tournament.component.scss']
})
export class AddTournamentComponent implements OnInit, OnDestroy {
  tournamentForm: FormGroup;
  submitted = false;
  loading: boolean = false;
  tournament: Tournament;
  constructor(private formBuilder: FormBuilder, private tournamentService: TournamentService, private router: Router) { }
  get f() {
    return this.tournamentForm.controls;
  }
  ngOnInit() {
    this.tournamentForm = this.formBuilder.group({
      name: ['',[Validators.required, Validators.maxLength(255)]],
      date_start: ['', [Validators.required]],
      date_close_reg: ['', [Validators.required]],
      date_cancel_reg: ['', [Validators.required]],
      regulations: ['', [Validators.required]],
    });
  }
  ngOnDestroy() {
    this.submitted = false;
    this.tournamentForm.reset();
  }
  onSubmit() {
    this.submitted = true;
    if (this.tournamentForm.invalid) {
      return;
    }
    this.loading = true;
    this.tournament = new Tournament(this.tournamentForm.value.name, this.tournamentForm.value.regulations
      ,this.tournamentForm.value.date_start, this.tournamentForm.value.date_close_reg, this.tournamentForm.value.date_cancel_reg);
    this.tournamentService.addTournament(this.tournament).then((tourn: Tournament) => {
      if(tourn === null){
        this.router.navigateByUrl('/admin/addTournament').then();
      }else {
        document.getElementById('reg_form').style.display = 'none';
        document.getElementById('successful-reg').style.display = 'block';
        setTimeout(()=>{
          this.router.navigateByUrl('/admin').then();
        }, 2000)
      }
    });
  }
}
