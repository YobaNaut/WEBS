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
    // if (ar.length != 2) {
    //     return NaN;
    // }
	return ar;
}

function t1() {
	alert( null || 2 || undefined );
}
function t2() {
	alert( alert(1) || 2 || alert(3) );
}
function t3() {
	alert( 1 && null && 2 );
}
function t4() {
	alert( alert(1) && alert(2) );
}
function t5() {
	alert( null || 2 && 3 || 4 );
}
function t6(str) {
	let curtext = document.getElementById("6 out");

	let age = parseInt(str);
	if (age >=14 && age <=90) {
		curtext.innerHTML = "Да, вы сознательный человек."
	}
	else if (age < 14 ){
		curtext.innerHTML = "Нет, вы малы."
	}
	else {
		curtext.innerHTML = "Нет, вы мертвы."
	}
}
function t7(str) {
	let curtext = document.getElementById("7 out");

	let age = parseInt(str);

	curtext.innerHTML = "";

	if (age < 14 | age > 90) {
		curtext.innerHTML = "Да, вы либо малы, либо мертвы. \n"
	}
	if (!(age >=14 && age <=90)){
		curtext.innerHTML += "Да, вы либо малы, либо мертвы. \n"
	}
	else {
		curtext.innerHTML ="Нет, вы сознательный человек."
	}
}
function t8() {
	if (-1 || 0) alert( 'first' );
  	if (-1 && 0) alert( 'second' );
  	if (null || -1 && 1) alert( 'third' );
}
function t9() {
	let curtext = document.getElementById("9 out");

	let login = prompt("Login: ");
	if (login === "Админ") {
  
	  let pass = prompt("Password: ");
  
	  if (pass === "Я Главный") {
		alert("Здравствуйте");
		curtext.innerHTML = "Здравствуйте"; 
	  }else if (pass == null) {
		alert("Отменено");
		curtext.innerHTML =  "Отменено";
	  } else {
		alert("Неверный пароль");
		curtext.innerHTML = "Неверный пароль";
	  }
  
	}else if (login == null) {
	  alert("Отменено");
	  curtext.innerHTML = "Отменено";
	} else {
	  alert("Я вас не знаю");
	  curtext.innerHTML =  "Я вас не знаю";
	}
  
}

function t10() {
	let i = 3;
	while (i) {
  		alert( i-- );
	}
	let curtext = document.getElementById("10 out");
	curtext.innerHTML = i++;
}

function t11() {
	let res1 = [];
	let res2 = [];
  
	let i = 0;
	while (++i < 5) {
	  alert( i );
	  res1.push(i);
	}
  
	i = 0;
	while (i++ < 5) {
	  alert( i );
	  res2.push(i);
	}
	let curtext = document.getElementById("11 out");
	curtext.innerHTML = res1+"\n"+res2;
}
function t12() {
	let res1 = [];
	let res2 = [];
	for (let i = 0; i < 5; i++) {
	  alert( i );
	  res1.push(i);
	}
	for (let i = 0; i < 5; ++i) {
	  alert( i );
	  res2.push(i);
	}
	let curtext = document.getElementById("12 out");
	curtext.innerHTML = res1+"\n"+res2;
  
}
function t13() {
	let res = [];

	for (var i = 2; i <= 10; i+=2) {
	  res.push(i)
	}

	let curtext = document.getElementById("13 out");
	curtext.innerHTML = res;
  
}
function t14() {
	let res = [];

	let i =0;
	while (i<3) {
	  alert( `number ${i}!` );
	  res.push(i);
	  i++;
	}
	let curtext = document.getElementById("14 out");
	curtext.innerHTML = res;
}
function t15() {
	let curtext = document.getElementById("15 out");
	
	while (true) {
		let a = prompt("Введите число > 100");
		if (a==null) {
		  alert("Отмена");
		  curtext.innerHTML = "Отмена";
		  return;
		}else if (a>100) {
		  alert(a);
		  curtext.innerHTML = a;
		  return;
		}
	  }
	
}
function t16(str) {
	let nums = [];
	let n = parseInt(str);
	for (var i = 0; i <= n; i++) {
	  nums.push(i);
	}
	nums[1] = 0;
	for (var i = 2; i < nums.length; i++) {
	  if (nums[i]!=0) {
		for (let j = i+i; j < nums.length; j+=i) {
		  nums[j] = 0;
		}
	  }
	}
  
	let res = []
  
	for (var i = 0; i < nums.length; i++) {
	  if (nums[i]!=0) {
		res.push(nums[i]);
	  }
	}
	let curtext = document.getElementById("16 out");
	curtext.innerHTML = res;
  
}
function t17() {
	let curtext = document.getElementById("17 out");

	let browser = "Chrome";
	if (browser == 'Edge') {
	  alert( "You've got the Edge!" );
	  curtext.innerHTML = "You've got the Edge!";
	  return
	}
	else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' ||browser == 'Opera') {
	  alert( 'Okay we support these browsers too' );
	  curtext.innerHTML = 'Okay we support these browsers too';
	  return
	}
	else
	{
	  alert( 'We hope that this page looks ok!' );
	  curtext.innerHTML = 'We hope that this page looks ok!';
	  return
	}
}
function t18(str) {
	let curtext = document.getElementById("18 out");
	let number = parseInt(str);

	switch (number) {
	  case 0:
	  alert('Вы ввели число 0');
	  curtext.innerHTML = 'Вы ввели число 0';
	  break;
	  case 1:
	  alert('Вы ввели число 1');
	  curtext.innerHTML = 'Вы ввели число 1';
	  break;
	  case 2:
	  case 3:
	  alert('Вы ввели число 2, а может и 3');
	  curtext.innerHTML = 'Вы ввели число 2, а может и 3';
	  break;
	}
}

function t19(age) {
	let curtext = document.getElementById("19 out");
	curtext.innerHTML ="нет";
	
	// if (age > 18) {
	// 	return true;
	//   } else {
	// 	// ...
	// 	return confirm('Родители разрешили?');
	//   }
	
	if (age > 18) {
		return true;
	  }
	  // ...
	  return confirm('Родители разрешили?');
	}
	
}

function checkAge(age) {
	if (age > 18)  return true;
	return confirm('Родители разрешили?');
  }
  function checkAgeA(age) {
	return (age > 18 || confirm('Родители разрешили?'));
  }
  function checkAgeB(age) {
	return (age > 18) ? true : confirm('Родители разрешили?');
  }
  

function t20(str) {
	let age = prompt("age = ",20);

	let curtext = document.getElementById("20 out");

	if (str == "a") curtext.innerHTML = "1 вариант: "+checkAgeA(age);
	if (str == "b") curtext.innerHTML = "2 вариант: "+checkAgeB(age);
}

function min(a,b) {
	if (a>b) {
	  return a;
	}
	return b;
}
  

function t21(str) {
	let curtext = document.getElementById("21 out");

	let ar = strtoarr(str);

	let a = ar[0]; let b = ar[1];

	curtext.innerHTML = "минимальное: " + min(a,b);
}

function pow(x,n) {
	let res = 1;
	while (n>1) {
	  res*=x;
	  n--;
	}
	return res;
  }
  
function t22() {
	let curtext = document.getElementById("22 out");
	curtext.innerHTML = pow(  prompt("X = ",1), prompt("N = ",1));
}