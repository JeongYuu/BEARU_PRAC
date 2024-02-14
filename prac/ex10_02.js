const array = ["a", "b" , "c"];

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

array[0] = "A";
array[1] = "B";
array[2] = "C";

console.log(array);

array.push("d"); //맨 끝에 추가
console.log(array); 


array.pop("d"); //맨 끝에 삭제
console.log(array); 
