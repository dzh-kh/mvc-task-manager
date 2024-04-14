const partialCheckKeys = ["title"];

export function filterDBValues(obj, params) {
  let isValid = true;
  Object.keys(params).forEach((key) => {
    if (partialCheckKeys.includes(key)) {
      const checkRes = stringFieldPartialCheck(obj[key], params[key]);
      if (!checkRes) isValid = false;
    } else if (obj[key] !== params[key]) isValid = false;
  });
  return isValid;
}

function stringFieldPartialCheck(str, str2) {
  return str.includes(str2) ? true : false;
}
