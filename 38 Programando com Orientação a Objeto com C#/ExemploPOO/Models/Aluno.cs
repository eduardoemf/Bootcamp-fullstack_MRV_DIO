namespace ExemploPOO.Models
{
    public class Aluno : Pessoa // Classe aluno herda da classe pessoa
    {
        public double Nota { get; set; }

        public override void Apresentar()
        {
            Console.WriteLine($"Olá, meu nome é {Nome}, sou aluno/estudante e minha nota é: {Nota}");
        }
    }
}