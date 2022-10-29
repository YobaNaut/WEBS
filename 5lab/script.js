function emptyones() {

}

function strtoarr(str) {
	let ar;
	if (str.indexOf('\\') > -1 || str.indexOf('/') > -1) {
		ar = str.trim().replace(/\s+/g, '').replace("\\", "/").split('/');
	}
	else {
		ar = str.trim().replace(/\s+/g, ' ').split(' ');
	}
	return ar;
}

function t1() {
	let curtext = document.getElementById("1 out");
	//curtext.innerHTML = 

	let user = {};
	user.name = "John";
	user.surname = "Smith";
	user.name = "Pete";
	delete user.name;
	curtext.innerHTML = JSON.stringify(user);
}

function isEmpty(obj) {
	return Object.keys(obj).length == 0;
}

function t2() {
	let curtext = document.getElementById("2 out");
	//curtext.innerHTML = 

	let schedule = {};
	alert(isEmpty(schedule)); //true
	schedule["8:30"] = "get up";
	alert(isEmpty(schedule));  //false
}
function t3() {
	let curtext = document.getElementById("3 out");
	//curtext.innerHTML = 

	const user = {
		name: "John"
	};
	// это будет работать?
	user.name = "Pete";

	curtext.innerHTML = JSON.stringify(user);
}
function t4() {
	let curtext = document.getElementById("4 out");
	//curtext.innerHTML = 

	let salaries = {
		John: 100,
		Ann: 160,
		Pete: 130
	}
	let sum = 0;

	for (let zar of Object.values(salaries)) {
		sum += zar;
	}
	curtext.innerHTML = sum;
}

function multiplyNumeric(obj) {
	for (var a of Object.keys(obj)) {
		if (typeof (obj[a]) === 'number') {
			obj[a] *= 2;
		}
	}
}

function t5() {
	let curtext = document.getElementById("5 out");
	//curtext.innerHTML = 

	// до вызова функции
	let menu = {
		width: 200,
		height: 300,
		title: "My menu"
	};

	multiplyNumeric(menu);
	// после вызова функции
	menu = {
		width: 400,
		height: 600,
		title: "My menu"
	};
	curtext.innerHTML = JSON.stringify(menu);

}
function t6() {
	let curtext = document.getElementById("6 out");
	//curtext.innerHTML = 

	let fruits = ["Яблоки", "Груша", "Апельсин"];

	// добавляем новое значение в "копию"
	let shoppingCart = fruits;
	shoppingCart.push("Банан");

	// что в fruits?
	//alert( fruits.length ); // ?
	curtext.innerHTML = 4;
}
function t7() {
	let curtext = document.getElementById("7 out");
	//curtext.innerHTML = 

	let styles = ["Джаз", "Блюз"];
	styles.push("Рок-н-ролл");
	styles[parseInt(styles.length / 2)] = "Классика";
	alert(styles.shift());
	styles.unshift("Регги");
	styles.unshift("Рэп");
	curtext.innerHTML = styles;
}
function t8() {
	let curtext = document.getElementById("8 out");
	//curtext.innerHTML = 

	let arr = ["a", "b"];
	arr.push(function () {
		return this;
	})
	curtext.innerHTML = arr[2]();
	//Выведится содержимое массива. This указывает на сам массив
}

function sumInput() {
	let arr = [];
	while (true) {
		let v = prompt("Введите значения");
		if (isNaN(v) || v == '') {
			break;
		}
		arr.push(v);
	}
	let sum = 0;
	for (var a of arr) {
		sum += Number(a);
	}
	return sum;
}
function t9() {
	let curtext = document.getElementById("9 out");
	//curtext.innerHTML = 

	curtext.innerHTML = sumInput();
}
function getMaxSubSum(arr) {
	let max = 0;
	let sum = 0;
	for (var x of arr) {
		sum = Math.max(0, sum + parseInt(x))
		max = Math.max(max, sum)
	}
	return max;
}
function t10(val) {
	let curtext = document.getElementById("10 out");
	//curtext.innerHTML = 

	let ar = strtoarr(val);
	let max = getMaxSubSum(ar);
	curtext.innerHTML = max;
}
function t11(val) {
	let curtext = document.getElementById("11 out");
	//curtext.innerHTML = 

	let arr = strtoarr(val);
	let mem = {};

	for (var a of arr) {
		if (mem[a] == undefined) {
			mem[a] = 1;
		} else {
			mem[a]++;
		}
	}

	for (var a of Object.keys(mem)) {
		if (mem[a] > 2) {
			let i = arr.indexOf(Number(a));
			while (i >= 0) {
				arr.splice(i, 1);
				i = arr.indexOf(Number(a));
			}
		}
	}

	curtext.innerHTML = JSON.stringify(arr);
}

function t12(val) {
	let curtext = document.getElementById("12 out");
	//curtext.innerHTML = 

	let arr = strtoarr(val);
	let max = 0;
	let maxi = 0;
	for (var i = 0; i < arr.length; i++) {
		let a = arr[i];
		if (a % 2 == 1) {
			if (a > max) {
				max = a;
				maxi = i;
			}
		}
	}

	arr.push(arr.splice(maxi + 1, 1)[0]);
	arr.push(arr.splice(maxi + 1, 1)[0]);
	arr.push(arr.splice(maxi + 1, 1)[0]);

	arr.unshift(arr.splice(maxi - 1, 1)[0])

	curtext.innerHTML = arr;
}

function t13(val) {
	let curtext = document.getElementById("13 out");
	//curtext.innerHTML = 

	let arr = strtoarr(val);
	let sum = 0;
	for (var a of arr) {
		if (a < 0) {
			sum += a;
		}
	}
	curtext.innerHTML = sum;
}

function t14(val) {
	let curtext = document.getElementById("14 out");
	//curtext.innerHTML = 

	let arr = strtoarr(val);
	let sum = 1;

	for (var i = 0; i < arr.length; i += 2) {
		sum *= arr[i];
	}
	curtext.innerHTML = sum;
}

function t15(val) {
	let curtext = document.getElementById("15 out");
	//curtext.innerHTML = 

	let arr = strtoarr(val);
	let mode = 0;
	let sum = 0;
	for (var a of arr) {
		if (a == 0 && mode == 1) {
			mode = 2;
			break;
		}
		if (a == 0 && mode == 0) {
			mode = 1;
		}
		if (mode == 1) {
			sum += a;
		}
	}

	if (mode == 2) {
		curtext.innerHTML = sum;
	}
	else
		curtext.innerHTML = 0;
}

function t16(val) {
	let curtext = document.getElementById("16 out");
	//curtext.innerHTML = 

	let arr = strtoarr(val);
	let max = 0;
	for (var a  of arr) {
	  max=Math.max(max,a);
	}
	curtext.innerHTML = max;
}

function t17(val) {
	let curtext = document.getElementById("17 out");
	//curtext.innerHTML = 

	let arr = strtoarr(val);
	let min = null;
	for (var a of arr) {
	  if (a%2==0) {
		if (min==null) {
		  min=a;
		}else {
		  min=Math.min(a,min);
		}
	  }
	}
	if (min!=null) {
		curtext.innerHTML = min;
		break;
	}
	else
		curtext.innerHTML =  arr[0];
}

function t18(val) {
	let curtext = document.getElementById("18 out");
	//curtext.innerHTML = 

	let arr = strtoarr(val);
	for (var i = 0; i < arr.length; i++) {
	  if (arr[i]==0) {
		arr.unshift(arr.splice(i,1)[0]);
	  }
	}
	curtext.innerHTML =  arr;
}

function t19(val) {
	let curtext = document.getElementById("19 out");
	//curtext.innerHTML = 

	let arr = strtoarr(val);

	let min = arr[0];
	let mini = 0;
  
	let max = arr[0];
	let maxi = 0;
  
	for (var i = 0; i < arr.length; i++) {
	  if (arr[i]<min) {
		min = arr[i];
		mini=i;
	  }
	  if (arr[i]>max) {
		max = arr[i];
		maxi=i;
	  }
	}
	curtext.innerHTML =  (maxi+mini);
}

function t20(val) {
	let curtext = document.getElementById("20 out");
	//curtext.innerHTML = 

	let arr = strtoarr(val);

	let max = arr[0];
	let maxi = 0;
  
	for (var i = 0; i < arr.length; i++) {
	  if (Math.abs( arr[i])<max) {
		max = Math.abs( arr[i]);
		maxi=i;
	  }
	}
	curtext.innerHTML =  arr[maxi];
}

function t21() {
	let curtext = document.getElementById("21 out");
	//curtext.innerHTML = 

	let arr = [];
	for (var i = 0; i < 10; i++) {
	  arr[i] = parseInt( Math.random()*20-10);
	  //arr[i]=i;
	}
	let res = arr.slice(0,arr.length/2).reverse().concat(arr.slice(arr.length/2).reverse());
	curtext.innerHTML =  "\n"+arr.join(",")+"\n"+res.join(",");
}

function t22() {
	let curtext = document.getElementById("22 out");
	//curtext.innerHTML = 

	let arr = [];
	for (var i = 0; i < 12; i++) {
	  arr[i] = parseInt( Math.random()*24-12);
	  //arr[i]=i;
	}
	arr.unshift(arr.pop());
	arr.unshift(arr.pop());
	arr.unshift(arr.pop());
	arr.unshift(arr.pop());
	curtext.innerHTML =  arr;
}
