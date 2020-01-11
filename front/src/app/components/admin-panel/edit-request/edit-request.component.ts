import { Component, OnInit } from '@angular/core';
import {TournamentUserService} from '../../../Services/tournament-user-service';
import {ActivatedRoute, Router} from '@angular/router';
import {TournamentUser} from '../../../Models/TournamentUser';
import {User} from '../../../Models/User';
import {Tournament} from '../../../Models/Tournament';

@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.scss']
})
export class EditRequestComponent implements OnInit {
  requestId: string;
  request = new TournamentUser('','');
  constructor(private tournamentUserService: TournamentUserService, private activatedRoute:  ActivatedRoute,  private router: Router) {
    this.requestId = this.activatedRoute.snapshot.paramMap.get('id');
    this.request.id = 0;
    this.request.user_id = new User('','','','','','',null,'','');
    this.request.tournament_id  = new Tournament('','',new Date(),new Date(), new Date());
  }

  ngOnInit() {
    this.tournamentUserService.getById(this.requestId).then((request:TournamentUser) => {
      this.request = request;
    })
  }
  getRequestDate(type: string){
    return  'http://localhost:8080/api/tournamentUser/downloadFile'+ type + '/' + this.requestId;
  }

  delete() {
    this.tournamentUserService.delete(this.requestId).then(()  => {
        document.getElementById('reg_form').style.display = 'none';
        document.getElementById('successful-reg').style.display = 'block';
        setTimeout(()=>{
          this.router.navigateByUrl('/admin').then();
        }, 2000)
    })
  }

  submit() {
    this.tournamentUserService.confirm(this.requestId).then((tournamentUser)  => {
      if(tournamentUser === null){
        this.router.navigateByUrl('/admin/requests/request/'+this.requestId).then();
      }
      else {
        this.request = tournamentUser;
        document.getElementById('reg_form').style.display = 'none';
        document.getElementById('successful-reg').style.display = 'block';
        setTimeout(()=>{
          this.router.navigateByUrl('/admin').then();
        }, 2000)
      }
    })
  }
}
