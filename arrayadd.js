let arr=[1,2,3,[4,5,6],7,8,9,[12,3,5],7,8];
let totalsum=0;
let Indexof=0;
let val2=[];

function arradd(arr)
{
    let val=0;
    arr.forEach((ele)=>
    {
        if (isFinite(ele))
        {
totalsum=totalsum+ele;
val=val+ele;
val2.push(val);
        }
        else if(Array.isArray(ele))
        {
            Indexof=arr.indexOf(ele);
            arradd(ele);

arr[Indexof]=val2[val2.length-1]
        } 
    })

    return arr;
}

let c=arradd(arr);
console.log(c);

let d=0;
for(x of c)
{
    d=d+x;
}
console.log(d);

