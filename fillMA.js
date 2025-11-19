export function generateFillData(shortArr, longArr, candles) {
    const fill = [];

    for (let i = 0; i < shortArr.length; i++) {
        const s = shortArr[i];
        const l = longArr[i];
        if (s == null || l == null) {
            fill.push({
                time: candles[i].time,
                short: null,
                long: null,
                color: null,
            });
            continue;
        }
        const isBull = s > l;
        fill.push({
            time: candles[i].time,
            short: s,
            long: l,
            color: isBull ? "rgba(255, 212, 41, 0.6)" : "rgba(41, 98, 255, 0.6)",
        });
    }

    return fill;
}

