class stackclass
{
    
    constructor(maxsize)
    {
       this.maxsize=maxsize;
       this.arr=new Array(maxsize);
       
    }

    //last in first out
push(val)
    {
let chk=false;
for (let i=this.maxsize-1;i>=0;i--)
{
    
if (this.arr[i]==undefined)
{
    this.arr[i]=val;
    chk=true;
    break;
}
}
if (chk==true)
{
    console.log("inserted!");
    console.log(this.arr);
    return 0;
    
}
else{
    console.log("stack over flow!");
    return -1;
}    
    }

    pop()
    {
        if (this.arr.length==0)
        {
            //console.log("no element present in stack for deletion!")
            return -1;
        }
        else{
           // console.log("element popped successfully");
            return this.arr.shift();
        }

    }

    peek()
    {
        console.log(this.arr);
    }
}

class queueclass
{
    //fifo
    constructor(maxsize)
    {
       this.maxsize=maxsize;
       this.arr=new Array(maxsize);
       
    }

    enqueue(val)
    {
        let chk=false;
        for (let i=0;i<=this.maxsize;i++)
        {
            //console.log(this.arr[i]);
        if (this.arr[i]==undefined)
        {
           this.arr[i]=val;
            chk=true;
            break;
        }
        }
        if (chk==true)
        {
            //console.log("inserted!")
            return 0;
            
        }
        else{
            //console.log("stack over flow!");
            return -1;
        }    
    }

    dequeue()
    {
        if (this.arr.length==0)
        {
          //  console.log("no element present in stack for deletion!")
          return -1;
        }
        else{
         //   console.log("element popped successfully");
            return this.arr.shift();
        }

    }

    peek()
    {
        console.log(this.arr);
    }
}



class stackclass2
{
    constructor(maxsize)
    {
       this.maxsize=maxsize;
       this.arr=new Array(maxsize);
       
    }

    //last in first out
push(val)
    {
let chk=false;
for (let i=0;i<=this.maxsize;i++)
{
    
if (this.arr[i]==undefined)
{
    this.arr[i]=val;
    chk=true;
    break;
}
}
if (chk==true)
{
    console.log("inserted!");
    console.log(this.arr);
    return 0;
    
}
else{
    console.log("stack over flow!");
    return -1;
}    
    }

    pop()
    {
        if (this.arr.length==0)
        {
            //console.log("no element present in stack for deletion!")
            return -1;
        }
        else{
           // console.log("element popped successfully");
            return this.arr.pop();
        }

    }

    peek()
    {
        console.log(this.arr);
    }
}

let stk=new stackclass(4);

// for (let a=0;a<=10;a++)
// {
//     let c1=stk.push(a+1);
//     console.log(c1);
// }

let c1=stk.push(1);
    console.log(c1);
    let c2=stk.push(2);
    console.log(c1);


stk.peek();
// for (let a=0;a<=10;a++)
// {
//     console.log(stk.pop());
// }

console.log(stk.pop());

stk.peek();


// let que=new queueclass(2);

// // for (let a=0;a<=10;a++)
// // {
// //     let c1=que.enqueue(a+1);
// //     console.log(c1);
// // }
// let c1=que.enqueue(1);
//     console.log(c1);
//     let c2=que.enqueue(2);
//     console.log(c1);

// que.peek();
// for (let a=0;a<=10;a++)
// {
//     console.log(que.dequeue());
// }

// que.peek();