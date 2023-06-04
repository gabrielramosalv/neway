export function justOneWord(text: string): string {
    const spaceIndex = text.indexOf(" ");
    return text.substring(0, spaceIndex == -1 ? text.length : spaceIndex);
}

export function capitalize(text: string): string {
    return text.substring(0, 1).toUpperCase() + text.substring(1, text.length).toLowerCase();
}