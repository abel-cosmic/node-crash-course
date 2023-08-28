setTimeout(()=>{
    console.log(`in the timeout`);
    clearInterval(int);
},3000);
const int  = setInterval(()=>{
    console.log(`logging every 3 second`);
},1000)

console.log(__dirname);// the driectory of the current file
console.log(__filename);//the directory with the file name