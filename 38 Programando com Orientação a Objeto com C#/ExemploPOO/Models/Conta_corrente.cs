namespace ExemploPOO.Models
{
    public class Conta_corrente : Conta
    {
        public override void Creditar(double valor)
        {
            base.saldo = valor; //base serve para informar que o valor está sendo inserindo no atributo da classe pai
        }
    }
}