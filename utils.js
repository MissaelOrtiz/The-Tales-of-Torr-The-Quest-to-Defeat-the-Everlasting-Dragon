export function findById(arr, idee) {
    for (let item of arr) {
        if (item.id === idee) return item;
    } 
    return null;
}