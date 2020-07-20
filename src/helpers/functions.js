export const formatDate = (date) => {
  date = date.split("-");
  date = date.reverse();
  return date.join("-");
};

export const formatTime = (time) => {
  time = time.split(":");
  time.pop();
  return time.join(":");
};

export const getTimeFromDataFormat = (data) => {
  return data.split(" ")[1];
};
