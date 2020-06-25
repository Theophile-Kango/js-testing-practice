export const capitalize = (string) => {
    try {
        string = string.replace(/^./,string[0].toUpperCase());
        return string;
      }
      catch(message) {
        return "You must give a string";
      }
}
