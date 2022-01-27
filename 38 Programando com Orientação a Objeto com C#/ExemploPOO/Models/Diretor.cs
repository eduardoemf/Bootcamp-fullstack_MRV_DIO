namespace ExemploPOO.Models
{
    public class Diretor : Professor
    {
        public override void Apresentar()
        {
            Console.WriteLine($"Olá, meu nome é {Nome}, sou diretor e meu salário é: R$ {salario}");
        }
    }
}