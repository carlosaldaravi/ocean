export const Level = class Level {
  constructor(data = null) {
    if (!data) return;
    this.id = data?.id;
    this.name = data?.name;
    this.order = data?.order;
  }
};
