import {Pipe, PipeTransform} from '@angular/core';
import {Tournament} from '../Models/Tournament';

@Pipe({
  name: 'tournamentFilter'
})
export class TournamentSearchFilterPipe implements PipeTransform{
  transform(tournamentList: Tournament[], searchString: string = ''): Tournament[] {
    if (!searchString.trim()){
      return tournamentList;
    }
    return tournamentList.filter( tournament => {
      return tournament.name.toLowerCase().indexOf(searchString.toLowerCase()) != -1;
    })
  }

}
