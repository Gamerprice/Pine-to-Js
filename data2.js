export const candles = [
  { time: 1695050000, open: 100, high: 101, low: 99, close: 100 },
  { time: 1695050060, open: 100, high: 102, low: 99, close: 101 },
  { time: 1695050120, open: 101, high: 103, low: 100, close: 102 },
  { time: 1695050180, open: 102, high: 104, low: 101, close: 103 },
  { time: 1695050240, open: 103, high: 105, low: 102, close: 104 },
  { time: 1695050300, open: 104, high: 106, low: 103, close: 105 },

  // 180 свечей
  ...Array.from({ length: 180 }).map((_, i) => {
    const t = 1695050360 + i * 60;

    const trend = i * 0.22;              
    const wave = Math.sin(i / 10) * 4;   
    const base = 105 + trend + wave;

    const isGreen = Math.random() > 0.45;

    const open = base + (Math.random() - 0.5) * 2;
    const close = open + (isGreen ? Math.random() : -Math.random()) * 2;

    const high = Math.max(open, close) + Math.random();
    const low  = Math.min(open, close) - Math.random();

    return { time: t, open, high, low, close };
  }),

  { time: 1695061160, open: 145, high: 148, low: 144, close: 147 },
  { time: 1695061220, open: 147, high: 150, low: 146, close: 149 },
  { time: 1695061280, open: 149, high: 152, low: 148, close: 151 },
  { time: 1695061340, open: 151, high: 154, low: 150, close: 153 },
];
