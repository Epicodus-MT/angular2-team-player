import { Component } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router'

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent {
  constructor(private router: Router){

  }
  
  players: Player[] = [
   new Player("Henry Wingo", 23, "Midfielder", 21, "Lake Forest Park, WA" 1),

  new Player("Osvaldo Alonso", 6, "Midfielder", 31, "an Cristóbal, Cuba" 2),

  new Player("Brad Evans", 3, "Defender/Midfielder", 32, "San Cristóbal, Cuba" 3),

  new Player("Kelvin Leerdam", 18, "Defender", 27, "Utrecht, Netherlands" 4),

  new Player("Nouhou Tolo", 5, "Defender", 20, "Douala, Cameroon" 5),
 ];

  goToDetailPage(clickedPlayer: Player) {
    this.router.navigate(['players', clickedPlayer.id]);
  };
}
