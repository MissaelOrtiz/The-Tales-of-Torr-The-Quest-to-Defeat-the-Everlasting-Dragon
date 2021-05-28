export function findById(arr, idee) {
    const number = Number(idee);
    for (let item of arr) {
        if (item.id === number) return item;
    } 
    return null;
}