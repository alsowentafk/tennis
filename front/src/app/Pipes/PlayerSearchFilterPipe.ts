import {Pipe, PipeTransform} from '@angular/core';
import {Tournament} from '../Models/Tournament';
import {User} from '../Models/User';

@Pipe({
  name: 'playerFilter'
})
export class PlayerSearchFilterPipe implements PipeTransform{
  transform(playerList: User[], searchString: string = ''): User[] {
    if (!searchString.trim()){
      return playerList;
    }
    return playerList.filter( player => {
      return player.second_name.toLowerCase().indexOf(searchString.toLowerCase()) != -1;
    })
  }

}
