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

function t1(str) {
    let curtext = document.getElementById("1 out")
    //curtext.innerHTML = 
  let x = parseInt(str);
  if (x>0) {
    curtext.innerHTML =  Math.sin(x)**2;
  }else {
    curtext.innerHTML =  1-2*Math.sin(x)**2;
  }

}
function t2(stri) {
    let curtext = document.getElementById("2 out")
    //curtext.innerHTML = 

    let a = parseInt(stri);
    let str = a+"";
    for (var i = 0; i < str.length/2; i++) {
      if (str[i]!=str[str.length-i-1]) {
        curtext.innerHTML =  "Нет, не палиндром";
      }
    }
    curtext.innerHTML =  "да, палиндром";
  
}
function t3(str) {
    let curtext = document.getElementById("3 out")
    //curtext.innerHTML = 
    
    let n = parseInt(str);
    if (n % 4 == 0) {
      if ((n % 100 != 0) || (n % 400 == 0)) {
        curtext.innerHTML = "Високосный :)";
      }
    }
    curtext.innerHTML = "Не високосный :(";
  
}
function t4(str) {
    let curtext = document.getElementById("4 out")
    //curtext.innerHTML = 

    let x = parseInt(str);

    if (x<-1) {
        curtext.innerHTML = -1;
      }else if (x>-1) {
        curtext.innerHTML = x;
      }else {
        curtext.innerHTML = 1;
      }
    
}
function t5(str) {
    let a = parseInt(str);
    let curtext = document.getElementById("5 out")
    //curtext.innerHTML = 
    switch (a) {
      case 12:
      case 1:
      case 2: {
      curtext.innerHTML =  "Winter";
      break;
      }
      case 3:
      case 4:
      case 5:{
        curtext.innerHTML = "Spring";
      }
      case 6:
      case 7:
      case 8:{
        curtext.innerHTML = "Summer";
        break;
      }
      case 9:
      case 10:
      case 11:{
        curtext.innerHTML = "Fall";
        break;
      }
      default:{
        curtext.innerHTML = "Error";
        break;
      }
    }
  
}
function t6(str) {
    let curtext = document.getElementById("6 out")
    //curtext.innerHTML = 

    let ar = strtoarr(str);
    let m = ar[0], k = ar[1];

    let card = "";
  
    switch (k) {
      case 6:card = "Шестерка"; break;
      case 7:card = "Семерка"; break;
      case 8:card = "Восьмерка"; break;
      case 9:card = "Девятка"; break;
      case 10:card = "Десятка"; break;
      case 11:card = "Валет"; break;
      case 12:card = "Дама"; break;
      case 13:card = "Король"; break;
      case 14:card = "Туз"; break;
    }
    card+=" ";
    switch (m) {
      case 1:card += "пик"; break;
      case 2:card += "треф"; break;
      case 3:card += "бубуен"; break;
      case 4:card += "червей"; break;
      default: card += "чего?"; break;
    }
    curtext.innerHTML =  card;
}
function t7(str) {
    let curtext = document.getElementById("7 out")
    //curtext.innerHTML = 

    let n = parseInt(str);
    n-=n % 10;
    n%=60;
    let c = parseInt((n%10)/2);
    let a = n%12;
  
  
    let animals = ["Крыса", "Корова", "Тигр", "Заяц", "Дракон", "Змея", "Лошадь", "Овца", "Обезьяна", "Петух", "Собака", "Свинья"];
    let colors = [ "Зеленый", "Красный", "Желтый", "Белый", "Черный"];
  
    let year = animals[a] + ", "+colors[c];
  
  
    curtext.innerHTML =  year;
  
}
function t8() {
    let curtext = document.getElementById("8 out")
    //curtext.innerHTML = 

    let res = "";
    for (var i = 1; i < 10; i++) {
      res+=" ";
      for (var j = 1; j  < 10; j ++) {
        res+=" ";
        res+=(i*j)+" ";
        res+=" ";
      }
      res+="\n";
    }
    curtext.innerHTML= res;
}
function t9() {
    let curtext = document.getElementById("9 out")
    //curtext.innerHTML = 

    let s = ""
    for (var i = 2; i < 21; i++) {
      s += "sin("+i+")= "+Math.sin(i)+"\n";
    }
    curtext.innerHTML =  s;
}
function t10() {
    let curtext = document.getElementById("10 out")
    //curtext.innerHTML = 

	let res = [0,0];
  for (var i = 100; i <= 500; i++) {
    res[0]+=i;
  }
  let a = Number(prompt("from: ",100));
  let b = Number(prompt("to: ",500));
  if (a>b) {
    let t = a;
    a = b;
    b = t;
  }

  for (var i = a; i <= b; i++) {
    res[1]+=i;
  }

  curtext.innerHTML =  res;

}
function t11(str) {
    let curtext = document.getElementById("11 out")
    //curtext.innerHTML = 

    let n  = parseInt(str);

    let ss = 0;
    for (let i = 1.0; i < n; i+=1.0) {
      ss+= (1.0 / i);
    }
    curtext.innerHTML = ss;
}
function t12(str) {
    let curtext = document.getElementById("12 out")
    //curtext.innerHTML = 

    let ar = strtoarr(str);

    let a  = ar[0];
    let b = ar[1];
    let sum = 0;
    while (a>0) {
      a--;
      sum+=b;
    }
    curtext.innerHTML = sum
  
    sum = 0;
    a = ar[0];
    b = ar[1];
    while (b>0) {
      b--;
      sum+=a;
    }
     curtext.innerHTML += "\n"+sum;
  
}
function t13(str) {
    let curtext = document.getElementById("13 out")
    //curtext.innerHTML = 

    let n = parseInt(str);
    let sum = 0;
    for (var i = 0; i < n; i++) {
      sum+=i*2+1;
    }

    curtext.innerHTML = sum;
}
function t14() {
    let curtext = document.getElementById("14 out")
    //curtext.innerHTML = 
	
    let sum=0;
    for (var i = 50; i >= 1; i--) {
      sum= (i+sum)**0.5;
    }
    curtext.innerHTML =  sum;
  
}
function t15(str) {
    let curtext = document.getElementById("15 out")
    //curtext.innerHTML = 

    let seq  = strtoarr(str);
    seq.push(0);
    if (isNaN(seq[0])) 
        return;
    let i =0;
    let sum = 0;
    let c = 0;
  
    while (seq[i]!=0 ) {
      sum+=seq[i];
      c++;
      i++;
    }
    let o = {};
    o.sum = sum;
    o.c = c;
  
    curtext.innerHTML =  JSON.stringify(o);
  
}
function t16(str) {
    let curtext = document.getElementById("16 out")
    //curtext.innerHTML = 

    let seq  = strtoarr(str);
    seq.push(-1);
    let i =0;
    let sum = 0;
    let c = 0;
  
    while (seq[i]>=0) {
      sum+=seq[i];
      c++;
      i++;
    }
  
    curtext.innerHTML =  sum/c;
  
}
function t17(str) {
    let curtext = document.getElementById("17 out")
    //curtext.innerHTML = 

    let n = parseInt(str);

    let a = n;
    let c = 0;
    while (a>0) {
      if (a%10==3) {
        c++;
      }
      a=parseInt(a/10);
    }
  
    let c2 = 0;
    a=n;
    while (a>0) {
      if (a%2==0) {
        c2++;
      }
      a=parseInt(a/10);
    }
  
    let c3 = 0;
    a=n;
    while (a>0) {
      if (a%10>5) {
        c3+=a%10;
      }
      a=parseInt(a/10);
    }
  
    let c4 = 1;
    a=n;
    while (a>0) {
      if (a%10>7) {
        c4*=a%10;
      }
      a=parseInt(a/10);
    }
  
    let c5 = 0;
    a=n;
    while (a>0) {
      if (a%5==0) {
        c5++;
      }
      a=parseInt(a/10);
    }
  
    curtext.innerHTML =  c+"\n"+c2+"\n"+c3+"\n"+c4+"\n"+c5;
  
}
function t18(str) {
    let curtext = document.getElementById("18 out")
    //curtext.innerHTML = 

    let n = parseInt(str);
    let l = 0;
  
    let a = n;
    let max =-123;
    let maxi=0;
  
    let min =123;
    let mini=0;
  
    while (a>0) {
      if (a%10>max) {
        max=a%10;
        maxi=l;
      }
  
      if (a%10<min) {
        min=a%10;
        mini=l;
      }
  
      l++;
      a=parseInt(a/10);
    }
  
    curtext.innerHTML =  ""+maxi+" "+(l-maxi-1)+" "+mini+" "+(l-mini-1)+" ";
  
}

function t19(str) {
    let curtext = document.getElementById("19 out")
    //curtext.innerHTML = 

    let n = parseInt(str);
    let n2 = n;
  
    while (n>2) {
      n--;
      if (n2%n==0) {
        curtext.innerHTML =  "Составное";
      }
    }
    curtext.innerHTML =  "Простое";
}

function t20(str) {
    let curtext = document.getElementById("20 out")
    //curtext.innerHTML = 

    let n = parseInt(str);
    let last = 100;
    while (n>0) {
      if (n%10>last) {
        curtext.innerHTML =  false;
      }
      last = n%10;
      n=parseInt(n/10);
    }
    curtext.innerHTML =  true;
}

function t21(str) {
    let curtext = document.getElementById("21 out")
    //curtext.innerHTML = 

    let seq  = strtoarr(str);
    seq.push(10000);
    let n = 64;
  
    let i =0;
    let sum = 0;
    let c = 0;
    curtext.innerHTML = " "
    while (seq[i]!=10000) {
      if (seq[i]>n) {
        curtext.innerHTML +=  i;
      }
      i++;
    }
  
    curtext.innerHTML =  "Нет такого числа";
  
}

function t22(str) {
    let curtext = document.getElementById("22 out")
    //curtext.innerHTML = 
    let ar = strtoarr(str);
    let n = ar[0];
    let a = ar[1];
    let b = ar[2];
  
    let ca = 0;
    let cb = 0;
  
  
    while (n>0) {
      if (n%10==a) {
        ca++;
      }
  
      if (n%10==b) {
        cb++;
      }
  
      n=parseInt(n/10);
    }
    curtext.innerHTML = a<b;
  
}

function t23() {
    let curtext = document.getElementById("23 out")
    //curtext.innerHTML = 

    let i = 10;
    let res = "";
      res+="\n";
    while (i<=30) {
      res+=i+"\n";
      i++;
    }
    res+="\n";
  
    i=10;
    do{
      res+=i+"\n";
      i++;
    }
    while (i<=30)
  
    curtext.innerHTML = res;
  }
  