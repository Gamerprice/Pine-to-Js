export function crossOver(shortArr, longArr){
    let result = []
    for(let i = 1; i <shortArr.length; i++){
        if(shortArr[i - 1] == null || longArr[i - 1] == null){
            result.push(false);
            continue
        }
        result.push(shortArr[i] > longArr[i] && shortArr[i-1] <= longArr[i - 1])
        }
    return result;
}

