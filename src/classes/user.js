export const User = class User {
  constructor(data) {
    this.id = data?.id;
    this.email = data?.email;
    this.created_at = data?.created_at;
    this.status = data?.status;
    this.updated_at = data?.updated_at;

    this.details = {
      id: data?.details?.id,
      firstname: data?.details?.firstname,
      lastname: data?.details?.lastname,
      phone: data?.details?.phone,
      city: data?.details?.city,
      size: data?.details?.size,
      weight: data?.details?.weight,
      footprint: data?.details?.footprint,
      dateBorn: data?.details?.dateBorn,
      comments: data?.details?.comments,
      gender: data?.details?.gender,
      knownWay: data?.details?.knownWay,
      dni: data?.details?.dni,
    };
    this.sports = data?.sports;
    this.level = {
      id: data?.level?.id,
    };
    this.calendar = data?.calendar;
    this.languages = data?.languages;
    this.courses = data?.courses;
    this.targets = data?.targets;
    this.roles = data?.roles;
  }
};
