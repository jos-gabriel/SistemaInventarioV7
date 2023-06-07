using System.Linq.Expressions;
namespace SistemaInventario.AccesoDatos.Repositorio.IRepositorio;

//Interfaz genérica
public interface IRepositorio <T> where T: class
{
    //public class Repositorio<T> : IRepositorio<T> where T: class
    //métodos a utilizar ASÍNCRONO
    
    Task <T> Obtener(int id);

    Task <IEnumerable<T>> ObtenerTodos(
        Expression<Func<T,bool>>filtro = null,
        Func<IQueryable<T>,IOrderedQueryable<T>> orderBy = null,
        string incluirPropiedades = null,
        bool isTracking = true
    );

    Task <T> ObtenerPrimero(
        Expression<Func<T, bool>> filtro = null,
        string incluirPropiedades = null,
        bool isTracking = true
    );

    Task Agregar(T entidad);
    void Remover(T entidad);
    void RemoverRango(IEnumerable<T> entidad);
}
