export const Student = class Student {
    constructor(data = null) {
        if(!data) return;
        this.nombre = data.nombre;
        this.apellido1 = data.apellido1;
        this.apellido2 = data.apellido2;
        this.email = data.email;
        this.telefono = data.telefono;
        this.imagen = data.picture.medium;
    }
}