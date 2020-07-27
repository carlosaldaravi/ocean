import { Level } from "./level";

export const SportLevel = class SportLevel {
  constructor(data = null) {
    if (!data) return;
    this.sportId = data?.sportId;
    this.levelId = data?.levelId;
    this.order = data?.order;
    this.level = [];
    if (data && data.level) {
      this.level = new Level(data.level);
    }
  }
};
