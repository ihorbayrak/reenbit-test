export const sortItems = (arr, sortBy) => {
    if (!arr || !sortBy) return;

    const arrCopy = [...arr];

    return arrCopy.sort((a, b) => {
        const firstItem = a[sortBy];
        const secondItem = b[sortBy];

        if (firstItem > secondItem) {
            return 1;
        }

        if (firstItem < secondItem) {
            return -1;
        }

        return 0;
    });
};
