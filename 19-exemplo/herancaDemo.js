/**
 *
 *
 *
 *
 *
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tamanho = /** @class */ (function () {
    function Tamanho(area) {
        this.area = area;
    }
    return Tamanho;
}());
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo(area) {
        return _super.call(this, area) || this;
    }
    Circulo.prototype.tamanhoTotal = function () {
        console.log("A area total do circulo \u00E9 " + this.area);
    };
    return Circulo;
}(Tamanho));
var circulo = new Circulo(250);
// circulo.tamanhoTotal();
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, sobremome, email, idade) {
        this.nome = nome;
        this.sobremome = sobremome;
        this.email = email;
        this.idade = idade;
    }
    Pessoa.prototype.apresentarPessoa = function () {
        console.log("Seja bem vindo(a) " + this.nome);
    };
    return Pessoa;
}());
var Estudante = /** @class */ (function (_super) {
    __extends(Estudante, _super);
    function Estudante(nome, sobremome, email, idade, periodo, tipoGraduacao) {
        var _this = _super.call(this, nome, sobremome, email, idade) || this;
        _this.periodo = periodo;
        _this.tipoGraduacao = tipoGraduacao;
        return _this;
    }
    Estudante.prototype.apresentarEstudante = function () {
        _super.prototype.apresentarPessoa.call(this);
        console.log("Me chamo " + this.nome + " e estou cursando " + this
            .tipoGraduacao + " no periodo " + this.periodo);
    };
    return Estudante;
}(Pessoa));
var estudante = new Estudante("Fabio", "Guelfi", "fabioguelfunix@gmail.com", 22, 2, "analise de sistemas");
estudante.apresentarEstudante();
//# sourceMappingURL=herancaDemo.js.map