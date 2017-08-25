import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PlayerService]
})

export class AdminComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  submitForm(name: string, jersey: string, position: string) {
    var newPlayer: Player = new Player(name, jersey, position);
    console.log(newPlayer);
  }

  submitForm(name: string, jersey: number, position: string) {
  var newPlayer: Player = new Player(name, jersey, position);
  this.playerService.addPlayer(newPlayer);
}

}
