export function crossUnder(short, long) {
    const result = [];

    for (let i = 1; i < short.length; i++) {
        if (short[i - 1] == null || long[i - 1] == null) {
            result.push(false);
            continue;
        }
        result.push(short[i] < long[i] && short[i - 1] >= long[i - 1]);
    }

    return result;
}
