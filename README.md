

```markdown
# Desafio Angular - Cadastro de Alunos

Este projeto é um desafio Angular que consiste em um formulário para cadastrar alunos com nome e duas notas, calcular a média e determinar se o aluno está aprovado ou reprovado. Os dados são exibidos em uma tabela, onde é possível excluir registros.

## Funcionalidades

- **Cadastro de Alunos**: Insira o nome do aluno e duas notas.
- **Cálculo Automático**: A média e a condição (aprovado/reprovado) são calculadas automaticamente.
- **Tabela de Alunos**: Exibe todos os alunos cadastrados com suas médias e condições.
- **Exclusão de Alunos**: Cada aluno tem um botão para excluir seus dados.

## Tecnologias Utilizadas

- **Angular CLI**: Versão 16.
- **Bootstrap**: Para estilização do formulário e da tabela.
- **HTML/CSS**: Para a estrutura e estilos personalizados.

## Como Executar o Projeto

Siga os passos abaixo para rodar o projeto localmente:

### Pré-requisitos

- Node.js (versão 16 ou superior)
- Angular CLI (instalado globalmente)

### Passos

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/desafio-angular.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd desafio-angular
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Execute o servidor de desenvolvimento:

   ```bash
   ng serve
   ```

5. Acesse o projeto no navegador:

   ```
   http://localhost:4200
   ```

## Estrutura do Projeto

- **`src/app/aluno-form`**: Contém o componente do formulário e da tabela.
  - `aluno-form.component.ts`: Lógica do formulário e da tabela.
  - `aluno-form.component.html`: Template do formulário e da tabela.
  - `aluno-form.component.css`: Estilos personalizados.
- **`src/app/app.module.ts`**: Configuração do módulo principal do Angular.
- **`src/index.html`**: Arquivo HTML principal com o link para o Bootstrap.

## Capturas de Tela

![Formulário de Cadastro]
![imagem2-listaDeCadastroDeAlunos](https://github.com/user-attachments/assets/5489902f-7838-4dc1-b23d-67c8be027b33)


![Tabela de Alunos]
![imagem1 lista de cadastro de alunos](https://github.com/user-attachments/assets/fce24fb9-83d6-4d69-a1d9-ca50abce3664)



## Como Contribuir

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adicionando nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.


---

Feito com ❤️ por [Arthurvenicio03](https://github.com/Arthurvenicio03)
```
