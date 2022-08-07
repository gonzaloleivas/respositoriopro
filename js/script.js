 function mostrarsuperlistado(){
    alert ("este es el superlistado");
}

let lista=[];
        function guardar(){
            let personas={};
            let nom=document.getElementById('nombre').value;
            let edad=document.getElementById('edad').value;

            personas.nombre= nom;
            personas.edad=edad;

            lista.push(personas);
            localStorage.setItem("lista",JSON.stringify(lista));
            mostrar(lista);
        }

        function mostrar(lista){

            let tabla = "<table border =1> <th> Personas </th><th> Precios </th>";
            if (lista.length==0){
                tabla+="<tr align='center'><td><span class='label label-warning'>Sin personas</span></td> </tr>";
            }else{
            for (i=0; i<lista.length; i++){
    
                tabla+="<tr align='center'><td>" + lista[i].nombre + "</td><td>" + lista[i].edad +"</td><td> <button id='boton"+i+"' onclick = 'eliminar("+i+");' class='btn btn-danger'>Borrar</button> </tr>";
                }
            }
            tabla+="</table>";
            document.getElementById('lista').innerHTML=tabla;
            }
    
        function aparecer(){
            document.getElementById('lista').innerHTML=document.getElementById('listado')
        }
   