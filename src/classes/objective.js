export const Objective = class Objective {
    constructor(data = null) {
        this.id = data?.id;
        this.name = data?.name;
        this.level = data?.level;
        this.description = data?.description;

    }

}