export const Target = class Target {
  constructor(data = null) {
    this.id = data?.id;
    this.name = data?.name;
    this.description = data?.description;
    this.level = {
      id: data?.level?.id,
      name: data?.level?.name,
      order: data?.level?.order,
    };
    this.sport = {
      id: data?.sport?.id,
      name: data?.sport?.name,
      description: data?.sport?.description,
    };
    this.studentTargets = data?.studentTargets;
  }
};
