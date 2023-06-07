using SistemaInventario.Modelos;

namespace SistemaInventario.AccesoDatos.Repositorio.IRepositorio;

//Hereda de la interfáz genérica IRepositorio

public interface IBodegaRepositorio : IRepositorio<Bodega>
{
    void Actualizar(Bodega bodega);

}