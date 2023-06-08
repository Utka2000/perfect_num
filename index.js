/**Write a JS program to check whether a given number is a 'Perfect' number or not. 
Test Data : Input the number : 56
Expected Output : The positive divisor : 1 2 4 7 8 14 28 The sum of the divisor is : 64 So, the number is not perfect

(ii)

'Perfect' numbers within a given number of ranges. 
Test Data : Input the starting range or number : 1 Input the ending range of number : 50 
Expected Output : The Perfect numbers within the given range : 6 28**/
var sum=0
let x=(num)=>{
for(let i=0;i<num;i++)
{
if(num%i==0)
{
sum=sum+i;
if(sum==num){
console.log("Perfect Number")
}
}

}
}

x(6) 
