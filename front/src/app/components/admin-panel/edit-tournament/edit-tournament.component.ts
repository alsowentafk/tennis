import {Component, OnDestroy, OnInit} from '@angular/core';
import {Tournament} from '../../../Models/Tournament';
import {ActivatedRoute, Router} from '@angular/router';
import {TournamentService} from '../../../Services/tournament.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-tournament',
  templateUrl: './edit-tournament.component.html',
  styleUrls: ['./edit-tournament.component.scss']
})
export class EditTournamentComponent implements OnInit, OnDestroy {
  tournamentId: string;
  tournament: Tournament = new Tournament('','',new Date(),new Date(), new Date());
  tournamentForm: FormGroup;
  submitted = false;
  loading: boolean = false;
  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private tournamentService: TournamentService, private router: Router) {
    this.tournamentId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  get f() {
    return this.tournamentForm.controls;
  }

  ngOnInit() {
    this.tournamentForm = this.formBuilder.group({
      name: ['',[Validators.maxLength(255)]],
      date_start: ['', []],
      date_close_reg: ['', []],
      date_cancel_reg: ['', []],
      regulations: ['', []],
      results: ['', []]
    });
    this.tournamentService.findTournamentById(this.tournamentId).then((tournament: Tournament) => {
      this.tournament = tournament;
    })
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
    this.tournament.name = (this.tournamentForm.value.name != '') ? this.tournamentForm.value.name : this.tournament.name;
    this.tournament.date_start = (this.tournamentForm.value.date_start != '') ? this.tournamentForm.value.date_start : new Date(this.tournament.date_start);
    this.tournament.date_close_reg = (this.tournamentForm.value.date_close_reg != '') ? this.tournamentForm.value.date_close_reg : new Date(this.tournament.date_close_reg);
    this.tournament.date_cancel_reg = (this.tournamentForm.value.date_cancel_reg != '') ? this.tournamentForm.value.date_cancel_reg : new Date(this.tournament.date_cancel_reg);
    this.tournament.regulations = (this.tournamentForm.value.regulations != '') ? this.tournamentForm.value.regulations : this.tournament.regulations;
    this.tournament.results = this.tournamentForm.value.results;
    this.tournamentService.updateTournament(this.tournament).then((tourn: Tournament) => {
       if(tourn === null){
        this.router.navigateByUrl('/admin/tournaments/edtTournament/'+this.tournament.id).then();
       }else {
         this.tournament = tourn;
         document.getElementById('reg_form').style.display = 'none';
         document.getElementById('successful-reg').style.display = 'block';
       }
    });
  }

  delete() {
    this.tournamentService.delete(this.tournamentId).then(()  => {
        this.router.navigateByUrl('/admin').then();
    })
  }
}
