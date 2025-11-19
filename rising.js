export function rising(arr, length = 1) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < length || arr[i] == null || arr[i - length] == null) {
            result.push(false);
            continue;
        }
        result.push(arr[i] > arr[i - length]);
    }

    return result;
}
