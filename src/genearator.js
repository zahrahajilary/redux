export  function* generatorExample() {
    console.log('heeei')
        yield 8;
        yield 10;
        yield 9;
        return 11;
}
export function*  generatorExampleSecond (max) {
    let n = 0
    while (n< max){
        n++
        yield n*n
    }
}