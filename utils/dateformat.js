export const formatToLongDate = (dateStr) => {
    const date = new Date(dateStr);

    if (isNaN(date)) {
        throw new Error("Invalid date string");
    }

    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};
