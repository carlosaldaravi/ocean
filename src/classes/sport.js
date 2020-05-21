export const Sport = class Sport {
  constructor(data = null) {
    if (!data) return;
    this.id = data?.id;
    this.name = data?.name;
    this.description = data?.description;
    this.sportLevel = data?.sportLevel;
  }
};
