function sma(values, period) {
    const result = [];
    let windowSum = 0;

    for (let i = 0; i < values.length; i++) {
        windowSum += values[i];

        if (i >= period) {
            windowSum -= values[i - period];
            result.push(windowSum / period);
        } else {
            result.push(windowSum / (i + 1));
        }
    }
    return result;
}
export {sma}