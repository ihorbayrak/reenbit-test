export const checkLocation = (location, path) => {
    const regex = new RegExp(`(${path})`, 'i');

    return location.match(regex) !== null;
};
