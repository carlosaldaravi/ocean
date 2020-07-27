import { SportLevel } from "./sportLevel";

export const Sport = class Sport {
  constructor(data = null) {
    if (!data) return;
    this.id = data?.id;
    this.name = data?.name;
    this.description = data?.description;
    this.targets = data?.targets;
    this.sportLevels = [];
    if (data && data.sportLevels) {
      data.sportLevels.forEach((sportLevel) => {
        this.sportLevels.push({
          checked: false,
          sportLevel: new SportLevel(sportLevel),
        });
      });
    }
    this.checked = false;
  }
};
