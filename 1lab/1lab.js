function makel(i) {
    var block_to_insert ;
    var container_block ;

    block_to_insert = document.createElement('h2');
    block_to_insert.id = i;
    block_to_insert.innerHTML = i + ' Задача:';

    container_block = document.getElementsByName('body');
    container_block.appendChild(block_to_insert); 
    //основной блок задачи
    container_block = document.getElementById(i);
    block_to_insert = document.createElement('div');
    block_to_insert.id = i+'block';
    block_to_insert.className = 'task block';
    container_block.appendChild(block_to_insert);
}


//дать класс временным элементам, чтобы их удалять и заменять
//каждый временный элемент будет иметь id + ключевое слово "tempor"
function refresh(satring, i) {
    var tmp = document.getElementById(i+'tempor');
    tmp.innerHTML = satring;
}
function pustishki() {
    task1("hdfgv");
    task2(1);
    task3(1);
    task5("10 2");
    task7('10 2 5');
    task9();
    task11();
    task12("2 3 4");
    task13();
    task15();
    task17();
    task18();
    task19("23 10");
    task20("10 3");
    task21("2 000 000/10/5")
    task23("256")
}
function task1(st){
    console.clear()

    newst = '';
    for (let i = 0; i < st.length;i++) {
        newst += st[i];
        console.log(st[i])
    }
    let curtext = document.getElementById('1 out');
    curtext.innerHTML = newst;

    //задание как есть
    let str = "hdfgv";
    console.log("по заданию: "+ str[0] + str[1] + str[4]);
}

function task2(time) {
    let curtext = document.getElementById('2 out');
    if (isNaN(parseInt(time))) {curtext.innerHTML = 'не вижу времени'; return;}
    else {
        curtext.innerHTML = 
        time+   ' часов\n'+
        time*60+' минут\n'+
        time*3600+' секунд';
    }

}

function task3(numer) {
    var num = numer;
num +=  12;
num -=  14;
num *=  5;
num /= 7;
num ++;
num --;
document.getElementById('3 out').innerHTML = num;
}

function task4(num) {
    var num = num;
    alert(num);
}

function task5(str) {
    var curtext = document.getElementById('5 out');
    var ar = str.trim().split(' ');
    if (ar.length != 2) {
        curtext.innerHTML = 'только 2 числа';
        return;
    }
    var a = parseInt(ar[0]);
    var b = parseInt(ar[1]);
    if (isNaN(a) || isNaN(b)) {curtext.innerHTML = 'ЧИСЛА'; return;}

    curtext.innerHTML =
    `${a} + ${b}  = ${a+b}
    ${a} - ${b}   = ${a-b}
    ${a} * ${b}   = ${a*b}
    ${a} / ${b}   = ${a/b}`;
}

function task7(str) {
    var curtext = document.getElementById('7 out');
    var ar = str.trim().split(' ');
    result = 0; 
    if (/[a-zа-я]/i.test(str)) {curtext.innerHTML = 'у вас буквы в числах'; return}
    else {
    for (let i = 0; i < ar.length; i++) {
        result= parseFloat(result)+parseFloat(ar[i]);
    }
    curtext.innerHTML = result;
    }
}

function t8() {
    let a = 17, b = 10;
    let c = a - b;
    let d = 7;
    let result = c + d;
    document.getElementById('8 out').innerHTML = result;
}

function task9() { 
    let t = 60 * 60;
    document.getElementById('9 out').innerHTML = 
    `${t}с в часе
    ${t*24}c в сутках
    ${t*30}с в месяце`;
}

function task10() {
    let time = new Date();
    let hour = time.getHours(), minute = time.getMinutes(), second = time.getSeconds();
    document.getElementById('10 out').innerHTML = 
    `${(""+hour).padStart(2, "0")}:${(""+minute).padStart(2, "0")}:${(""+second).padStart(2, "0")}`
}

function task11(num) {
    document.getElementById('11 out').innerHTML = num**2;
}

let t12 = (arr) => arr.map(a => a%2 == 0 ? a**(1/2) : 0).reduce((part, a) => part + a);

function task12(str) {
    var ar = str.trim().replace(/\s+/g, ' ').split(' ');
    var curtext = document.getElementById('12 out');
    curtext.innerHTML = " ";

    for (let i = 0; i < str.length; i++) {
        if(ar[i] % 2 == 0) {
            curtext.innerHTML +='√'+ar[i]+'+';
        }
    }
    curtext.innerHTML += ' = '+t12(ar);
}

function task13() {
    document.getElementById('13 out').innerHTML = 1.15+2.30;
}

function task14(){
        let x = 5;
        alert(x++); // 5
}

function task15(){
    document.getElementById('15 out').innerHTML = [] + false - null + true;
}

function task16(){
    console.clear();
    let y = 1;
    let x = y = 2;

    console.log(x);
}

function task17(){
    document.getElementById('17 out').innerHTML = [ ] + 1 + 2;
}

function task18(){
    let a6, a7, a8, a9, a10;
    a6 = 5 % 3;
    a7 = 3 % 5;
    a8 = 5 + '3';
    a9 = '5' - 3;
    a10 = 75 + 'кг';    
    
    document.getElementById('17 out').innerHTML = 
    `${a6}, ${a7}, ${a8}, ${a9}, ${a10}`;
}

function task19(str){
    var curtext = document.getElementById('19 out');
    var ar = str.trim().replace(/\s+/g, ' ').split(' ');
    if (ar.length != 2) {
        curtext.innerHTML = 'только 2 числа';
        return;
    }
    var height = parseInt(ar[0]);
    var width = parseInt(ar[1]);
    let s = height * width;
    if (isNaN(height) || isNaN(width)) {curtext.innerHTML = 'ЧИСЛА'; return;}

    curtext.innerHTML =
    `Высота: ${height}
    Ширина: ${width}

    Площадь: ${s}`;
}

function task20(str){
    var curtext = document.getElementById('20 out');
    var ar = str.trim().replace(/\s+/g, ' ').split(' ');
    if (ar.length != 2) {
        curtext.innerHTML = 'только 2 числа';
        return;
    }
    var heightC = parseInt(ar[0]);
    var dC = parseInt(ar[1]);
    let v = Math.PI * dC**2 * heightC;
    if (isNaN(heightC) || isNaN(dC)) {curtext.innerHTML = 'ЧИСЛА'; return;}

    curtext.innerHTML =
    `Высота: ${heightC}
    Диаметр: ${dC}

    Объём: ${v}`;
}

function task21(str){
    var curtext = document.getElementById('21 out');
    var ar = str.trim().replace(/\s+/g, '').replace("\\", "/").split('/');
    if (ar.length != 3) {
        curtext.innerHTML = 'нужно 3 элемента';
        return;
    }
    var S = parseInt(ar[0]);
    var p = parseInt(ar[1]);
    var years = parseInt(ar[2]); 

    let perepl = S*(p/100*years);

    if (isNaN(S) || isNaN(p) || isNaN(years)) {curtext.innerHTML = 'ЧИСЛА'; return;}

    curtext.innerHTML =
    `Сумма: ${S}
    Процент: ${p}%
    Лет: ${years}

    Переплата: ${perepl}`;
}

function task22(){
    let str = "Привет", num = 123, flag = true, txt = "true";
    console.log([typeof(str) == "string", typeof(num) == "number", typeof(flag) == "boolean", typeof(txt) == "string"]);
}

function task23(num){
    document.getElementById('23 out').innerHTML = -num;
}

