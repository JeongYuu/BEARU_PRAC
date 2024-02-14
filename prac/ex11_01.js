//if문
console.log("if문");
const a = 4;
const b = 2;

if(a>b){
    console.log("true");
}else{
    console.log("false");
}

//for문
console.log("for문");
for(let i=0; i<10; i++){
    if(i === 4){
        continue;
    }
    console.log(i);

    if(i===7){
        break;
    }
}

//while문
console.log("while문");
let j = 0;
while(j<10){
    console.log(j);
    j++;
}

//for문 사용 예시
console.log("for문 예시");
const array = [0,1,2,3,4,5];
for(let i=0; i<array.length;i++){
    console.log(array[i]);
}

