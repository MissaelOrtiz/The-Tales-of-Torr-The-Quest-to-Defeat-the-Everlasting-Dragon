export function updateLog(parentElement, string) {
    const p = document.createElement('p');
    p.textContent = string;
    parentElement.append(p);
    return parentElement.scrollTop = parentElement.scrollHeight;
}