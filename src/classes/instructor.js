export const Instructor = class Instructor {
  constructor(data = null) {
    if (!data) return;
    this.id = data?.id;
    this.email = data?.email;
    this.details = {
      firstname: data?.details.firstname,
      lastname: data?.details.lastname,
      phone: data?.details.phone,
      dateBorn: data?.details.dateBorn,
      city: data?.details.city,
    };
  }
};
