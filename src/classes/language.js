export const Language = class Language {
  constructor(data = null) {
    if (!data) return;
    this.id = data?.id;
    this.name = data?.name;
    this.checked = false;
  }
};
