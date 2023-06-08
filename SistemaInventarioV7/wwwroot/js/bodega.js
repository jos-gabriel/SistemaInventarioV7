let datatable;

$(document).ready(function () {
   loadDataTable ();
});

function loadDataTable(){
    datatable = $('#tblDatos').DataTable({
        "ajax":{
            "url":"/Admin/Bodega/ObtenerTodos/"
        },
        "colums": [
            {"data": "nombre", "width":"20%"},
            {"data": "descripción", "width": "40%"},
            {
                "data": "estado",
                "render": function(data){
                    if(data==true){
                        return "Activo";
                    }
                    else {
                        return "Inactivo";
                    }
                }, "width": "20%"
            },
            {
                "data": "id",
                "render": function (data) {
                    return `
                        <div class="text-center">
                            <a href="/Admin/Bodega/Upsert/${data}" class="btn btn-success text-white" style="cursor:pointer">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </a>
                            <a onclick=Delete("/Admin/Bodega/Delete/${data}") class="btn btn-danger text-white" style="cursor:pointer">
                                <i class="fa-solid fa-trash"></i>
                            </a>
                        </div>
                    
                    `;
                }, "width": "20%"
            }
        ]
    });
}