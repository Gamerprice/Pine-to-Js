function colorizeMA(maArray,risingArray,candles){
    const green = [];
    const red = [];
    for (let i = 0; i < maArray.length; i++){
        const time = candles[i].time;
        const value = maArray[i];

        if(Number.isFinite(value) === false)continue;

        if (risingArray[i]){
            green.push({time,value});      
        }
        else{
            red.push({time,value});
        }
    }
    return {green,red}
}
export {colorizeMA}