import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jogador } from '../models/jogador';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {

  jogadorUrl = 'http://localhost:8080/jogadores';

  constructor(private http: HttpClient) { }
  jogadores: Jogador[] = [];
  

  listar(){
    return this.http.get(`${this.jogadorUrl}`)
      .subscribe(jogadorResult => {
        this.jogadores = jogadorResult as Jogador[];
        //console.log(this.jogadores);
      })
    }

    buscarPorId(id: number) {
      return this.http.get(`${this.jogadorUrl}/${id}`);
    }

    salvar(jogador: Jogador) {
      return this.http.post(`${this.jogadorUrl}/salvar`, jogador);
    }
  
    atualizar(jogador: Jogador) {
      return this.http.put(`${this.jogadorUrl}/atualizar`, jogador);
    }
  
    excluir(jogador: Jogador) {
      return this.http.delete(`${this.jogadorUrl}/${jogador.id}`);
    }
  
}
