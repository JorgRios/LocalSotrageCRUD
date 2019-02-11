if(localStorage.length!=0){
    for (var i = 0; i < localStorage.length; i++){ 
        var te = localStorage.getItem(localStorage.key(i));
        var nom = '"'+localStorage.key(i)+'"';
        document.getElementById('lista-notas').innerHTML+= "<tr><td>"+(parseInt(i)+1)+"</td><td>"+localStorage.key(i)+"</td><td><button type='button' class='button is-small is-info' onclick='ver("+nom+")'>Ver</button></td><td><button type='button' class='button is-small is-warning' onclick='editar("+nom+")'>Editar</button></td><td><button type='button' class='button is-small is-danger' onclick='return borrar("+nom+")'>Borrar</button></td></tr>";
    }
    document.getElementById('lista-noti').innerHTML = "";
}else{
    document.getElementById('lista-noti').innerHTML = "<div class='notification is-info'> No hay notas guardadas</div>";
}
function agregar(){
    var ti = document.getElementById('titulo').value;    
    var te = document.getElementById('texto').value;  
    if(ti.length>0&&te.length>0){
        localStorage.setItem(ti, te);
        listar();    
        limpiarca();
        document.getElementById('noti').innerHTML = "<div class='notification is-success'>Guardado Correctamente</div>";
    }else{
        document.getElementById('noti').innerHTML = "<div class='notification is-danger'>Debe competar los campos</div>";
    }
}
function listar(){
    document.getElementById('lista-notas').innerHTML="";
    if(localStorage.length!=0){
        for (var i = 0; i < localStorage.length; i++){ 
            var te = localStorage.getItem(localStorage.key(i));
            var nom = '"'+localStorage.key(i)+'"';
            document.getElementById('lista-notas').innerHTML+= "<tr><td>"+(parseInt(i)+1)+"</td><td>"+localStorage.key(i)+"</td><td><button type='button' class='button is-small is-info' onclick='ver("+nom+")'>Ver</button></td><td><button type='button' class='button is-small is-warning' onclick='editar("+nom+")'>Editar</button></td><td><button type='button' class='button is-small is-danger' onclick='return borrar("+nom+")'>Borrar</button></td></tr>";
        }
        document.getElementById('lista-noti').innerHTML = "";
    }else{
        document.getElementById('lista-noti').innerHTML = "<div class='notification is-info'> No hay notas guardadas</div>";
    }
}
function ver(ti){
    var tex = localStorage.getItem(ti);
    document.getElementById('tex').innerHTML = tex;
    document.getElementById('tit').innerHTML = ti;
    document.getElementById('noti').innerHTML = "";
    limpiarca();
}
function limpasal(){
    document.getElementById('tex').innerHTML = "";
    document.getElementById('tit').innerHTML = "";
}
function limpiarca(){
    document.getElementById('texto').value = '';
    document.getElementById('titulo').value = '';
}
function copia(){
    var ti = document.getElementById('titulo').value;    
    var te = document.getElementById('texto').value;
    document.getElementById('tex').innerHTML = te;
    document.getElementById('tit').innerHTML = ti;
}
function editar(ti){
    document.getElementById('noti').innerHTML = "";
    var tex = localStorage.getItem(ti);
    document.getElementById('texto').value = tex;
    document.getElementById('titulo').value = ti;
    document.getElementById('tex').innerHTML = tex;
    document.getElementById('tit').innerHTML = ti;
}
function borrar(ti){    
    if(!confirm(" Borrar elemento?")) {
        document.getElementById('noti').innerHTML = "";
        return false;        
    }else {
        localStorage.removeItem(ti);
        listar();
        limpasal();
        limpiarca();
        document.getElementById('noti').innerHTML = "";
    }
}