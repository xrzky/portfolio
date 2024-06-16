export function truncateString(str, num = 300) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }
  