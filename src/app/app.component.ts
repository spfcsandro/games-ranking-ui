import { Component, OnInit } from '@angular/core';
import { JogadorService } from './jogador-form/jogador.service';
import {MessageService} from 'primeng/api';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  constructor(public jogadorService: JogadorService, public messageService: MessageService ) {
  }
  
}
