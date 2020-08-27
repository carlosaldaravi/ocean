export const Instructor = class Instructor {
  constructor(data = null) {
    this.id = data?.id;
    this.email = data?.email;
    this.status = data?.status;
    this.userSports = data?.userSports;
    this.details = {
      photo: data?.details.photo,
      firstname: data?.details.firstname,
      lastname: data?.details.lastname,
      phone: data?.details.phone,
      dateBorn: data?.details.dateBorn,
      city: data?.details.city,
      gender: data?.details.gender,
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
  }
};
