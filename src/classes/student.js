export const Student = class Student {
  constructor(data = null) {
    if (!data) return;
    this.id = data?.id;
    this.email = data?.email;
    this.status = data?.status;
    this.userSports = data?.userSports;
    this.details = {
      id: data?.details?.id,
      photo: data?.details?.photo,
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
  }
};
