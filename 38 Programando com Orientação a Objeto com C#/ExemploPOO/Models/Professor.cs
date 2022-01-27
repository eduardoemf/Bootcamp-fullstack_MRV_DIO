namespace ExemploPOO.Models
{
    public class Professor : Pessoa
    {
        public double salario { get; set; }
        public  override void Apresentar()
        {
            Console.WriteLine($"Olá, meu nome é {Nome}, sou professor e meu salário é: R$ {salario}");
        }
    }
}