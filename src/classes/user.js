import { Language } from "./language";

export const User = class User {
  constructor(data) {
    this.id = data?.id;
    this.email = data?.email;
    this.status = data?.status;
    this.created_at = data?.created_at;
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
    this.userSports = data?.userSports;
    this.languages = [];
    if (data && data.languages) {
      data.languages.forEach((language) => {
        this.languages.push({
          checked: true,
          language: new Language(language),
        });
      });
    }
    this.roles = data?.roles;
  }
};
