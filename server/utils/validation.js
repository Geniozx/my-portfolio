function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isStringWithinLength(value, maxLength) {
  return (
    typeof value === "string" &&
    value.trim().length > 0 &&
    value.length <= maxLength
  );
}

function isNullableStringWithinLength(value, maxLength) {
  return (
    value === null ||
    (typeof value === "string" && value.length <= maxLength)
  );
}

function isBoolean(value) {
  return typeof value === "boolean";
}

function isInteger(value) {
  return Number.isInteger(value);
}

module.exports = {
  isNonEmptyString,
  isStringWithinLength,
  isNullableStringWithinLength,
  isBoolean,
  isInteger,
};