export function capitalize(text: string): string {
    return text.split(" ").map(word => {
        return word.substring(0, 1).toUpperCase() + word.substring(1, word.length).toLowerCase();
    }).join(" ");
}