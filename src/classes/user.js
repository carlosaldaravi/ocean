export const User = class User {
    constructor(data) {
        this.id = data?.id;
        this.email = data?.email;
    }
}