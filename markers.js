export function generateMarkers(crossOverArray, crossUnderArray, candles) {
    const markers = [];

    for (let i = 0; i < candles.length; i++) {
        const time = candles[i].time;

        if (crossOverArray[i]) {
            markers.push({
                time,
                position: "belowBar",
                color: "#2962FF",
                shape: "arrowUp",
                text: "UP",
            });
        }

        if (crossUnderArray[i]) {
            markers.push({
                time,
                position: "aboveBar",
                color: "#bc25ca",
                shape: "arrowDown",
                text: "DOWN",
            });
        }
    }

    return markers;
}
