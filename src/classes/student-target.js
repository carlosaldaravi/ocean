export const StudentTarget = class StudentTarget {
  constructor(data = null) {
    this.target = {
      id: data?.target?.id,
      name: data?.target?.name,
      levelId: data?.target?.levelId,
      level: {
        name: data?.target?.level?.name,
        order: data?.target?.level?.order,
      },
      description: data?.target?.description,
      sportId: data?.target?.sportId,
    };
    this.instructor = {
      details: {
        firstname: data?.instructor?.details?.firstname,
        gender: data?.instructor?.details?.gender,
      },
    };
    this.validatedBy = data?.validatedBy;
    this.date = data?.date;
    this.feedback = data?.feedback;
    this.targetId = data?.targetId;
  }
};
