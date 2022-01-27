using System;
using System.IO;
using ExemploPOO.Models;
using ExemploPOO.Helper;

//Pessoa p1 = new Pessoa();
//p1.Nome = "Bob";
//p1.Idade = 20;
//p1.Apresentar();

// Valores válidos
//Retangulo r = new Retangulo();
//r.DefinirMedidas(30, 30);
//System.Console.WriteLine($"Área: {r.ObterArea()}");

// Valores inválidos
//Retangulo r2 = new Retangulo();
//r.DefinirMedidas(0, 30);
//System.Console.WriteLine($"Área: {r2.ObterArea()}");

//Aluno aluno1 = new Aluno();
//aluno1.Nome = "João";
//aluno1.Idade = 9;
//aluno1.Nota = 7.8;
//aluno1.Documento = 321654987;
//aluno1.Apresentar();


//Professor professor1 = new Professor();
//professor1.Nome = "José";
//professor1.Idade = 52;
//professor1.salario =2582.76;
//professor1.Documento = 654987321;
//professor1.Apresentar();

/* Calculadora calc = new Calculadora();
System.Console.WriteLine("Resultado da primeira soma: " + calc.Somar(10,10));
System.Console.WriteLine("Resultado da segunda soma: " + calc.Somar(10,10, 10)); */

/* Conta_corrente c = new Conta_corrente();
c.Creditar(100);
c.ExibirSaldo(); */

/* Calculadora calc = new Calculadora();
System.Console.WriteLine(calc.somar(10,20)); */

var caminho = "C:\\Users/eduar/Documents/Trabalhando com arquivos";
fileHelper helper = new fileHelper();

//helper.ListarDiretorios(caminho);
//helper.ListarArquivos(caminho);

System.Console.WriteLine("Criando diretório:");
helper.CriarDiretorio(Path.Combine(caminho, "Pasta_Teste_3", "SubpastaTeste3"));