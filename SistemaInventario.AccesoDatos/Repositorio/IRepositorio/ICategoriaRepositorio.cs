using SistemaInventario.Modelos;

namespace SistemaInventario.AccesoDatos.Repositorio.IRepositorio;

//Hereda de la interfáz genérica IRepositorio

public interface ICategoriaRepositorio : IRepositorio<Categoria>
{
    void Actualizar(Categoria categoria);

}