
// This is an axios wrapper. Only Get and Post methods are defined here since we dont use Put, Patch and Delete calls.
// There are try-catch blocks so we can easily use the Vue Alert component when a request fails
export const Alumno = class Alumno {
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