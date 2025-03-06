import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule

import { AppComponent } from './app.component';
import { AlunoFormComponent } from './components/aluno-form/aluno-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Adicione o FormsModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }