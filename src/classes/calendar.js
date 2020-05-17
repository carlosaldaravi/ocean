export const UserCalendar = class UserCalendar {
  constructor(data = null) {
    if (!data) return;
    this.id = data?.id;
    this.title = data?.title;
    this.start = data?.start;
    this.end = data?.end;
    this.allDay = data?.allDay;
  }
};
