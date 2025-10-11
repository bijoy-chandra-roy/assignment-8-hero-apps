export const convertCountToNumber = (count) => {
    return typeof count === "string"
        ? count.includes("M")
            ? parseFloat(count.replace("M", "")) * 1000000
            : parseFloat(count.replace("K", "")) * 1000
        : count;
};