function run() {
    console.log("hello!");
}

// 4-11
var scope = 'Global Variables';

function getValue() {
    var scope = 'Local Variables';
    return scope;
}

console.log(getValue());
console.log(scope);


// 4-13
var scope = 'Global Variables';

function getValue() {
    console.log(scope)  // Undifinedが帰ってくる　「変数の巻き上げ」
    var scope = 'Local Variables';
    return scope;
}

console.log(getValue());
console.log(scope);

// 4-29 引数のデフォルト値
function getTriangle(base=1, height=4) {
    return base * height / 2;
}
console.log(getTriangle(5))
console.log(getTriangle(5, undefined))

// 4-37
function sum(...nums) {
    let result = 0;
    for (let num of nums) {
        if (typeof num !== 'number') {
            throw new Error('指定値が数値ではありません：' + num);
        }
        result += num;
    }
    return result;
}

try {
    console.log(sum(1,3,5,6,8));
} catch(e) {
    window.alert(e.message);
}


// オブジェクトから特定のプロパティを取り出す
console.log('<<<<<<<<オブジェクトから特定のプロパティを取り出す')
function show({name}){
    console.log(name)
}

let member = {
    mid: 'Y0001',
    name: '山田太郎',
    address: 't_yamada@example'
};

show(member);


// 複数の戻り値を返す
console.log('<<<<<<<<複数の戻り値を返す')
function getMaxMin(...nums){
    return [Math.max(...nums), Math.min(...nums)];
}

let result = getMaxMin(10, 35, -5, 78, 0);
console.log(result);

let [max, min] = getMaxMin(10, 35, -5, 78, 0);
console.log(max)
console.log(min)