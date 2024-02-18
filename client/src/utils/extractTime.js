export function extractTime (dateString) {
    const date = new Date(dateString);

    const hours = padZero(date.getHours())
    const minutes = padZero(date.getMinutes())

    return `${hours}:${minutes}`
}

function padZero (n) {
    return n.toString().padStart(2,"0");
}