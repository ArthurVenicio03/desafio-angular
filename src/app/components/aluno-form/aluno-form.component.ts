import { Component } from '@angular/core';

interface Aluno {
  nome: string;
  nota1: number;
  nota2: number;
  media?: number;
  condicao?: string;

}
@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent {
  alunos: Aluno[] = [];
  aluno: Aluno = {
    nome: '',
    nota1: 0,
    nota2: 0
  }
  adicionarAluno(){
    const media = (this.aluno.nota1 + this.aluno.nota2) / 2;
    const condicao = media >= 7 ? "Aprovado" : "Reprovado";

    this.alunos.push({
      ...this.aluno,
      media,
      condicao
    });
    this.aluno = {
      nome: '',
      nota1: 0,
      nota2: 0
    };
  }
  excluirAluno(index: number) {
    this.alunos.splice(index, 1);
  }

}
