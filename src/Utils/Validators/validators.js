export const requried = (value) => {
    if (value)  return undefined;
    return 'field is requried';
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength)  return `Max length is ${maxLength} symbols`;
    return undefined;
}