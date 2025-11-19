
import { candles } from "./data2.js";
import { sma } from "./sma.js";
import { rising } from "./rising.js";
import { colorizeMA } from "./colorizeMA.js";
import { crossOver } from "./crossOver.js";
import { crossUnder } from "./crossUnder.js";
import { generateMarkers } from "./markers.js";



const chart = LightweightCharts.createChart(
    document.getElementById("chart"),
    {
        width: 900,
        height: 500,
        layout: {
            background: { type: "solid", color: "#ffffff" },
            textColor: "#000",
        },
        timeScale: {
            timeVisible: true,
            secondsVisible: true,
        },
    }
);

const candlesISO = candles.map(c => ({
    ...c,
    time: c.time,
}));

const candleSeries = chart.addCandlestickSeries();
candleSeries.setData(candlesISO);

const closes = candles.map(c => c.close);

const shortMA = sma(closes, 5);
const longMA = sma(closes, 10);

const risingShort = rising(shortMA, 1);
const { green, red } = colorizeMA(shortMA, risingShort, candles);

const shortSeriesData = candles.map((c, i) => ({
    time: c.time,
    value: shortMA[i],
}));

const shortSeries = chart.addLineSeries({
    color: "blue",
    lineWidth: 2,
    priceLineVisible: false,
});
shortSeries.setData(shortSeriesData);

const longSeriesData = candles.map((c, i) => ({
    time: c.time,
    value: longMA[i],
}));

const longSeries = chart.addLineSeries({
    color: "orange",
    lineWidth: 2,
    priceLineVisible: false,
});
longSeries.setData(longSeriesData);

const fillBetweenSeries = chart.addLineSeries({
    lineWidth: 14,
    lineStyle: 0,
    priceLineVisible: false,
});

const fillBetween = [];

for (let i = 0; i < candles.length; i++) {
    if (shortMA[i] == null || longMA[i] == null) {
        fillBetween.push({
            time: candles[i].time,
            value: null,
        });
        continue;
    }

    const mid = (shortMA[i] + longMA[i]) / 2;
    const isUp = shortMA[i] > longMA[i];

    fillBetween.push({
        time: candles[i].time,
        value: mid,
        color: isUp ? "rgba(255,212,41,0.35)" : "rgba(41,98,255,0.35)",
    });
}

fillBetweenSeries.setData(fillBetween);


const shortGreenSeries = chart.addLineSeries({
    color: "rgb(9,151,38)",
    lineWidth: 2,
    priceLineVisible: false,
});
shortGreenSeries.setData(green);

const shortRedSeries = chart.addLineSeries({
    color: "rgb(255,0,120)",
    lineWidth: 2,
    priceLineVisible: false,
});
shortRedSeries.setData(red);


const cO = crossOver(shortMA, longMA);
const cU = crossUnder(shortMA, longMA);

const markers = generateMarkers(cO, cU, candlesISO);
candleSeries.setMarkers(markers);


