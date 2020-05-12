export const Target = class Target {
  constructor(data = null) {
    this.target = {
      id: data?.id,
      name: data?.name,
      levelId: data?.levelId,
      description: data?.description,
      sportId: data?.sportId,
    };
    this.validatedBy = data?.validatedBy;
  }
};
