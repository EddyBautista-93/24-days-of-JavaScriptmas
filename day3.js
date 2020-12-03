function splitToChunks(values, size) {
    let result = [];
    for(let i = size; i > 0; i--){
        result.push(values.splice(0, Math.ceil(values.length / i)));
    }
    return result
}
const values = ["a", "b", "c", "d"];
const size = 2;


chunkyMonkey(values, size);