const Nodo = require("./Nodo");
const datos = require("./datos");

class Cola {
    constructor(){
        this.primero = null;
    }

    agregar(datos, repetidos){ //encolar
        //agregar al final de la lista
        if(this.buscar(datos.dato1)==true && repetidos==false){
            console.log("YA EXISTE EL ELEMENTO EN LA LISTA")
            //SINO SE PERMITEN REPETIDOS, AQUI HAY QUE MOSTRAR ERROR
        }else{
        const auxiliar = new Nodo(datos);
        if (this.primero == null){
            this.primero = auxiliar;
        } else {
            var actual = this.primero;
            while(actual.siguiente != null){
                actual = actual.siguiente;
            }
            actual.siguiente = auxiliar;
        }
    }
    }

    eliminar(){ //desencolar
        var retorno = this.primero;
        if (this.primero == null){
            console.log("Cola vacía");
            return null;
        }else{
        if (this.primero.siguiente != null){
                this.primero = retorno.siguiente;
            }else{
                this.primero = null;
            }
            return retorno.datos.dato1;
        }
    }

    buscar(dato){
        if(this.primero != null){
            for(let verificador = this.primero; verificador != null; verificador = verificador.siguiente){
                if (verificador.datos.dato1 == dato){
                    return true;
                }
            }
        }
        return false;
    }

    actualizar(antiguo, nuevo, repetidos){
        if(this.buscar(antiguo)){
            if(this.buscar(nuevo)==true && repetidos == false){
                console.log("No se permiten datos repetidos");
                console.log("el nuevo valor ya existe en la lista");
            }else{
            var actual = this.primero;
            while(actual != null){
                if (actual.datos.dato1 == antiguo){
                    var nuevos = new datos(nuevo,null);
                    actual.datos = nuevos;
                    break;
                    //actualizar solo el primero que coincida
                }
                actual = actual.siguiente;
            }
          }
        }else{
            console.log("No se encontro ese valor en la lista");
            //elemento no encontrado para actualizarse
        }
    }

    imprimir(){
        if(this.primero != null){
            var info = "";
            for(let verificador = this.primero; verificador != null; verificador = verificador.siguiente){
                info = verificador.datos.dato1;
                console.log(info);
            }
        }else{
            console.log("LISTA VACIA");
        }
    }
}

module.exports = Cola;