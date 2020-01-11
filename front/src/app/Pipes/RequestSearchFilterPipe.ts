import {Pipe, PipeTransform} from '@angular/core';
import {Tournament} from '../Models/Tournament';
import {TournamentUser} from '../Models/TournamentUser';

@Pipe({
  name: 'requestFilter'
})
export class RequestSearchFilterPipe implements PipeTransform{

  transform(tournamentUserList: TournamentUser[], searchString: string = ''): TournamentUser[] {
    if (!searchString.trim()){
      return tournamentUserList;
    }
    return tournamentUserList.filter( tournament => {
      return tournament.tournament_id.name.toLowerCase().indexOf(searchString.toLowerCase()) != -1;
    })
  }

}
