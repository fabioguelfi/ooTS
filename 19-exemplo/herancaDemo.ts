/**
 * 
 * 
 * 
 *
 *  
 */

class Tamanho {
  constructor(public area: number) {}
}

class Circulo extends Tamanho {
  constructor(area: number) {
    super(area);
  }

  tamanhoTotal() {
    console.log(`A area total do circulo é ${this.area}`);
  }
}

let circulo = new Circulo(250);
// circulo.tamanhoTotal();

class Pessoa {
  constructor(
    public nome: string,
    public sobremome: string,
    public email: string,
    private idade: number
  ) {}

  apresentarPessoa() {
    console.log(`Seja bem vindo(a) ${this.nome}`);
  }
}

class Estudante extends Pessoa {
  constructor(
    nome: string,
    sobremome: string,
    email: string,
    idade: number,
    private periodo: number,
    private tipoGraduacao: string
  ) {
    super(nome, sobremome, email, idade);
  }

  apresentarEstudante() {
    super.apresentarPessoa();
    console.log(
      `Me chamo ${this.nome} e estou cursando ${this
        .tipoGraduacao} no periodo ${this.periodo}`
    );
  }
}

let estudante = new Estudante(
  "Fabio",
  "Guelfi",
  "fabioguelfunix@gmail.com",
  22,
  2,
  "analise de sistemas"
);

estudante.apresentarEstudante();