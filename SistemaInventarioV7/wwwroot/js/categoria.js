let datatable;

$(document).ready(function () {
   loadDataTable ();
});

function loadDataTable(){
    datatable = $('#tblDatos').DataTable({
        language: {
            url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json',
        },
        
        "ajax": {
            "url":"/Admin/Categoria/ObtenerTodos"
        },
        "columns": [
            {"data": "nombre", "width":"20%"},
            {"data": "descripcion", "width": "40%"},
            {
                "data": "estado",
                "render": function(data){
                    if(data == true){
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
                            <a href="/Admin/Categoria/Upsert/${data}" class="btn btn-success text-white" style="cursor:pointer">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </a>
                            <a onclick=Delete("/Admin/Categoria/Delete/${data}") class="btn btn-danger text-white" style="cursor:pointer">
                                <i class="fa-solid fa-trash"></i>
                            </a>
                        </div>
                    `;
                }, "width": "20%"
            }
        ]
    });
}

function Delete (url){
    swal({
        title: "Está seguro de Eliminar la categoria?",
        text: "Este registro no se podrá recuperar",
        icon: "warning",
        buttons: true,
        dangerMode: true
    }).then((borrar) => {
        if (borrar){
            $.ajax({
                type: "POST",
                url: url,
                success : function (data) {
                    if (data.success){
                        toastr.success(data.message);
                        datatable.ajax.reload();
                    }
                    else{
                        toastr.error(data.message);
                    }
                }
            });
        }
    });
}