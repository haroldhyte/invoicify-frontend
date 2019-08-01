export function compareDates(a, b) {
  let left = new Date(a.dueDate + " 0:00:01");
  let right = new Date(b.dueDate + " 0:00:01");

  if(left < right) {
    return -1;
  } else if (left === right) {
    return 0;
  } else return 1;
}
