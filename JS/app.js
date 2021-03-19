const aplicacion_contactos = new Vue({

    el: "#app",
    data: {

        contactos: [],
        NombreContacto: "",
        TelefonoContacto: ""
    },
    methods: {

        AgregarContacto: function(){

            this.contactos.push({

                nombre: this.NombreContacto,
                telefono: this.TelefonoContacto
            });
            
            this.NombreContacto = "";
            this.TelefonoContacto = "";
            localStorage.setItem('gym-con', JSON.stringify(this.contactos));
        },

        EditarContacto: function(con){

            if(this.NombreContacto == ""){

                this.contactos[con].telefono = this.TelefonoContacto;
                this.TelefonoContacto = "";
            }

            else if(this.TelefonoContacto == ""){

                this.contactos[con].nombre = this.NombreContacto;
                this.NombreContacto = "";
            }

            else{

                this.contactos[con].telefono = this.TelefonoContacto;
                this.contactos[con].nombre = this.NombreContacto;
                this.NombreContacto = "";
                this.TelefonoContacto = "";
            }
            localStorage.setItem('gym-con', JSON.stringify(this.contactos));
        },

        EliminarContacto: function(con){
            this.contactos.splice(con, 1)
            localStorage.setItem('gym-con', JSON.stringify(this.contactos));
        }
    },

    created: function(){
        let DATOS = JSON.parse(localStorage.getItem('gym-con'));
        if(DATOS==null){
            this.contactos = [];
        }else{
            this.contactos = DATOS;
        }
    }
});

// Autocompletado del teléfono
$(document).ready(function(){
    $("#telefono").mask("000-000-0000");
});