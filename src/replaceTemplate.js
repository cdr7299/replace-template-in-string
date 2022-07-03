export const replaceWithJSON = (obj, str) => {
  const parsedObj = JSON.parse(obj);

  const splitStr = str.split(" ");

  for (let i in splitStr) {
    if (splitStr[i].match(/[{{}}]+/)) {
      let tempStr = splitStr[i].split(/[{{}}]+/).filter(function (e) {
        return e;
      });

      for (let x in tempStr) {
        if (parsedObj[tempStr[x]]) {
          tempStr[x] = parsedObj[tempStr[x]];
        }
      }
      splitStr[i] = tempStr.join("");
    }
  }
  return splitStr.join(" ");
};
