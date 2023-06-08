using Microsoft.AspNetCore.Mvc;

namespace SistemaInventarioV7.Areas.Admin.Controllers;

public class BodegaController : Controller
{
    // GET
    public IActionResult Index()
    {
        return View();
    }
}