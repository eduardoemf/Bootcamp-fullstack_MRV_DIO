using System.IO;
namespace ExemploPOO.Helper
{
    public class fileHelper
    {
        public void ListarDiretorios(string caminho)
        {
            var retornoCaminho = Directory.GetDirectories(caminho, "*", SearchOption.AllDirectories);

            foreach ( var retorno in retornoCaminho)
            {
                System.Console.WriteLine(retorno);
            }
        }

        public void ListarArquivos(string caminho)
        {
            var retornoArquivos = Directory.GetFiles(caminho, "*", SearchOption.AllDirectories);
            
            foreach (var retorno in retornoArquivos)
            {
                System.Console.WriteLine(retorno);
            }

        }

        public void CriarDiretorio(string caminho)
        {
           var retorno = Directory.CreateDirectory(caminho);
           System.Console.WriteLine(retorno.FullName);
        }

        internal void CriarDiretorio(Func<string, string, string> combine)
        {
            throw new NotImplementedException();
        }
    }
}