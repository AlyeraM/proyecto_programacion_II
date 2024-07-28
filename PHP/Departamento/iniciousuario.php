<div class="container-fluid">
    <div class="card mb-3">
        <div class="card-header">
            Usuarios del Sistema
        </div>
        <div class="card-body">

            <div class="table-responsive">
                <input type="hidden" id="pagina" name="" value="2">
                <table class="table table-striped" id="dataTable" style="text-align: center;">
                    <thead class="table-info">

                        <tr>
                            <th>Nro</th>
                            
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Correo</th>
                            
                            <th>Tipo Usuario</th>
                            <th>Opciones</th>

                        </tr>

                    </thead>

                    <tbody id="tablauser">

                    </tbody>
                    <tfoot class="table-info">

                        <tr>
                            <th>Nro</th>
                            
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Correo</th>
                            
                            <th>Tipo Usuario</th>
                            <th>Opciones</th>

                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>

    </div>
</div>
<div class="modal fade" id="ModalUser" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="ModalLabeluser">Datos de Usuario Nuevo</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id='formularioUser'>
                    <div class="form-group">
                        <input type="hidden" class="form-control" id="iduser">
                        <div> 
                            <label for="recipient-name" class="col-form-label">Nombre:</label>
                            <input type="text" class="form-control" id="nombreuser" maxlength="20"
                            onkeypress="return soloLetras(event)">
                            <span class="text-danger" style="display: none;" id="errornombre">Este campo no puede estar vacio.</span>
                        </div>
                       <div>
                            <label for="recipient-name" class="col-form-label">Apellido:</label>
                            <input type="text" class="form-control" id="apellidouser" maxlength="20"
                            onkeypress="return soloLetras(event)">
                            <span class="text-danger" style="display: none;" id="errorapellido">Este campo no puede estar vacio.</span>
                       </div>
                       <div>
                            <label for="recipient-name" class="col-form-label">Correo:</label>
                            <input type="email" class="form-control" id="correouser" maxlength="35">
                            <span class="text-danger" style="display: none;" id="errorcorreo">Ej: persona@empresa.com</span>
                       </div>
                       <div>    
                            <label for="recipient-name" class="col-form-label">Tipo Usuario:</label>
                             <select id="TipoUser" class="form-control">
                            <option value="0">Tipo de usuario</option>
                     		</select>
                            <span class="text-danger" style="display: none;" id="errortipou">Seleccione tipo de usuario.</span>
                       </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-primary" id="EditarUser">Editar</button>
            </div>
        </div>
    </div>
</div>
<!-- MODAL EDITAR -->
<!-- <div class="modal fade" id="ModalEditUser" tabindex="-1" role="dialog" aria-labelledby="UserModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Nuevo Banco o Departamento</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Departamento o Banco:</label>
                        <input type="text" class="form-control" id="DepartamentoEdit">
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-primary" id="GuardarDep">Guardar</button>
            </div>
        </div>
    </div>
</div>
 -->
 
<div id="volver">      
     <button type="button" class="btn btn-secondary"><a href="javascript:history.back()">Volver</a></button>
</div>