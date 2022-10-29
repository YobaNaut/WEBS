function emptyones() {
t3();
t4();
t5();
t7();
}	
function strtoarr(str) {
	let ar;
	if (str.indexOf('\\') > -1 || str.indexOf('/') > -1) {
		ar = str.trim().replace(/\s+/g, '').replace("\\", "/").split('/'); 
	}
	else {
		ar = str.trim().replace(/\s+/g, ' ').split(' '); 
	}
    // if (ar.length != 2) {
    //     return NaN;
    // }
	if (isNaN(ar[0]) || isNaN(ar[1])) {
		return NaN;
	}
	return ar;
}

function t1() {
	let name = "Ilya";

	alert( `hello ${1}` );
	alert( `hello ${"name"}` ); 
	alert( `hello ${name}` ); 
}

function t2() {
	let name = prompt("Ваше имя: ");
	alert("Здравствуй, "+name);
}

function t3() {
	let a = 1, b = 1;

	let c = ++a;

	let d = b++;
	
	document.getElementById("3 out").innerHTML = 
	`a = ${a}
	b = ${b}
	c = ${c}
	d = ${d}`;
}

function t4() {
	let a = 2;
	let x = 1 + (a *= 2);
	
		document.getElementById("4 out").innerHTML = 
	`a = ${a}
	x = ${x}`;
}

function t5() {
	let curtext = document.getElementById("5 out");
	curtext.innerHTML = "";
	 let arr = ["" + 1 + 0,
				"" - 1 + 0,
				true + false,
				6 / "3",
				"2" * "3",
				4 + 5 + "px",
				"$" + 4 + 5,
				"4" - 2,
				"4px" - 2,
				7 / 0,
				" -9 " + 5,
				" -9 " - 5,
				null + 1,
				undefined + 1,
				" \t \n" - 2];
for (let i = 0; i < arr.length; i++){
	curtext.innerHTML += arr[i]+"\n";
}

}

function t6() {
	let a = Number(prompt("Первое число: ",1));
	let b = Number(prompt("Второе число: ",2));
	alert(a+b);
}

function t7() {
	document.getElementById("7 out").innerHTML = Math.PI.toFixed(2);
}

function t8(num) {
	let curtext = document.getElementById("8 out");
	if (isNaN(num)) {
		curtext.innerHTML = "Вы не ввели число";
		return;
	}
	curtext.innerHTML = "Вы ввели число "+num;
}

function t9(num) {
	let curtext = document.getElementById("9 out");
	if (isNaN(num)) {
		curtext.innerHTML = "Вы не ввели число";
		return;
	}
	curtext.innerHTML = num+" - вот такое число вы ввели";
}

function t10(len) {
	document.getElementById("10 out").innerHTML = "Периметр = "+len*4;
}

function t11(rad) {
	document.getElementById("11 out").innerHTML = "Диаметр = "+rad*2;
}

function t12(h) {
	document.getElementById("12 out").innerHTML = "До горизонта - "+Math.sqrt((6350+h)**2 - 6530**2).toFixed(3)+"км";
}
tcp
function t13(len) {
	document.getElementById("13 out").innerHTML =
	`
	${len**3} - объём
	${len**2} - площадь стороны
	${len**2 *6} - площадь поверхности
	`
}

function t14(rad) { //длина окружности
	document.getElementById("14 out").innerHTML =
	`
	${(2*Math.PI*rad).toFixed(2)} - длина окружности
	${(Math.PI*(rad**2)).toFixed(2)} - площадь круга
	`
}

function t15(str) {
	let curtext = document.getElementById('15 out');
	
	let ar = strtoarr(str);

	let a = ar[0];
	let b = ar[1];

	if (isNaN(a)||isNaN(b)) {
		console.clear();
		console.log(15+") Неверный ввод");
		return;
	}
	[a,b] = [b,a]
	curtext.innerHTML = a+" "+b;
}

function t16(str) {
	let curtext = document.getElementById('16 out');
	
	let ar = strtoarr(str);

	let a = ar[0];
	let b = ar[1];

	curtext.innerHTML ="а) "+ ((a+b)/2)+
				    "\n б) "+((a*b)**0.5);
}

function t17(str) {
	let curtext = document.getElementById('17 out');
	
	let ar = strtoarr(str);

	let a = ar[0]; // объём 
	let b = ar[1]; // масса

	curtext.innerHTML = b/a + " - плотность объекта";
}

function t18(str) {
	let curtext = document.getElementById('18 out');
	
	let ar = strtoarr(str);

	let a = ar[0]; // людей
	let b = ar[1]; // площадь

	curtext.innerHTML = a/b + " - плотность населения";
}

function t19(str) {
	let curtext = document.getElementById('19 out');
	
	let ar = strtoarr(str);

	let a = ar[0];
	let b = ar[1];

	curtext.innerHTML = (a*a+b*b)**0.5 + " - гипотенуза";
}

function t20(str) {
	let curtext = document.getElementById('20 out');
	
	let ar = strtoarr(str);

	let a = ar[0];
	let b = ar[1];

	curtext.innerHTML = (Math.PI*b*b)-(Math.PI*a*a) + " - площадь кольца";
}

function t21(str) {
	let curtext = document.getElementById('21 out');
	
	let ar = strtoarr(str);

	let a = ar[0];
	let b = ar[1];

	curtext.innerHTML = (a*a+b*b)**0.5 + a+b;
}

function t22(str) {
	let curtext = document.getElementById('22 out');
	
	let ar = strtoarr(str);

	if (ar.length != 3) {
		curtext.innerHTML = "неверные переменные";
		return;
	}
	let a = ar[0];
	let b = ar[1];
	let h = ar[2]; // высота

	let p = (((b-a)/2)**2+h**2)**0.5 // бёдра
	curtext.innerHTML = (a+b+p+p) + " - периметр трапеции";
}


