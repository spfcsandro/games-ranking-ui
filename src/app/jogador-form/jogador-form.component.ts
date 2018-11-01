import { Component, OnInit } from '@angular/core';
import { JogadorService } from './jogador.service';
import { Jogador } from '../models/jogador';
import { Router, ActivatedRoute } from '@angular/router';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-jogador-form',
  templateUrl: './jogador-form.component.html',
  styleUrls: ['./jogador-form.component.css']
})
export class JogadorFormComponent implements OnInit{
  
  jogadores = [];
  jogador = new Jogador();

  constructor(private jogadorService: JogadorService, public messageService: MessageService, 
              public router: Router, public route: ActivatedRoute){
    this.route.params.subscribe(params => {
      this.buscarPorId(params['id'])
     });
  }

  ngOnInit(){
    this.listar();
  }

  onSubmit() {
    if (!this.jogador.id) {
      this.salvar();
    } else {
      this.atualizar();
    }

    this.jogador = new Jogador();
  }

  listar(){
    this.jogadorService.listar()
  }

  edit(jogador: Jogador) {
    this.router.navigateByUrl(`/ranking/${jogador.id}`);
  }

  buscarPorId(id: number) {
    if (id){
      this.jogadorService.buscarPorId(id).subscribe(jogador => this.jogador = jogador as Jogador);
    }
  } 

  salvar() {
    this.jogadorService.salvar(this.jogador).subscribe(jogadorResult => {
      this.router.navigateByUrl("/ranking");
      this.jogadorService.listar();
      this.messageService.add({severity:'success', summary:'Jogador adicionado com sucesso!'});
      //console.log(jogadorResult);
    }, erro => {
      console.log(erro);
      this.messageService.add({severity:'error', detail:(erro.error.error)});
    })
  }

  atualizar() {
    this.jogadorService.atualizar(this.jogador).subscribe(jogadorResult => {
      this.router.navigateByUrl("/ranking");
      this.jogadorService.listar();
      this.messageService.add({severity:'success', summary:'Jogador atualizado com sucesso!'});
      //console.log(jogadorResult);
    }, erro => {
      this.messageService.add({severity:'error', summary:(erro.error.error)});
    })
  }

  excluir(jogador: Jogador) {
    this.jogadorService.excluir(jogador).subscribe(jogadorResult => {
      this.router.navigateByUrl("/ranking");
      this.jogadorService.listar();
      this.messageService.add({severity:'success', summary:'Jogador ' +  `${jogador.nome}` + ' Excluído com sucesso!'});
    }, erro => {
      this.messageService.add({severity:'error', summary:(erro.error.error)});
    })
  }
  
  
}
