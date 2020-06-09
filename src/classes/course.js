export const Course = class Course {
  constructor(data) {
    this.id = data?.id;
    this.courseInstructors = data?.courseInstructors;
    this.sport = {
      id: data?.sport?.id,
      name: data?.sport?.name,
      description: data?.sport?.description,
    };
    this.level = {
      id: data?.level?.id,
      name: data?.level?.name,
      order: data?.level?.order,
    };
    this.type = {
      id: data?.type?.id,
      name: data?.type?.name,
      price: data?.type?.price,
      discount: data?.type?.discount,
      maxStudents: data?.type?.maxStudents,
    };
    this.courseStudents = data?.courseStudents;
    this.calendar = data?.calendar;
  }
};
