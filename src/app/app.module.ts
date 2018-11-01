import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {KeyFilterModule} from 'primeng/keyfilter';
import {ToastModule} from 'primeng/toast';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JogadorFormComponent } from './jogador-form/jogador-form.component';
import { JogadorService } from './jogador-form/jogador.service';
import {MessageService} from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path : '', redirectTo: '/ranking', pathMatch:'full'},
  { path : 'ranking', component: JogadorFormComponent},
  { path: 'ranking/:id', component: JogadorFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    JogadorFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    KeyFilterModule,
    ToastModule
  ],
  providers: [JogadorService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
