/*
    Ajax (Asynchronous JavaScript and XML(JSON)): It is mainly web api through which we can data transfer through use of URL from any place like server, any third party server.

    * Through use of URL, we can work along with data.

    *** Describe some constructor, properties, method ***
        * new XMLHttpRequest() => it is a object or constructor that web browser provide through which we can send any
        HttpRequest to any site

        * open() => Its job is to open any URL
        * onReadyStateChange => through this, we will know, what happen when completed URL request.
        * status => when we are sent httprequest, we get several kind of Status code from server.
        * JSON => JSON is mainly look like JavaScript Object, but it's form as a string. 

*/
// create a HttpRequest for geeting data from server
// let xhr = new XMLHttpRequest();
// xhr.open('get', 'https://jsonplaceholder.typicode.com/users');

// xhr.onreadystatechange = function(e){
//     if(xhr.readyState === 4){
//         if(xhr.status === 200){
//             let res = JSON.parse(xhr.response);
//             console.log(res);
//         }else{
//             console.log(new Error(xhr.status))
//         }
//     }
// };
// xhr.send();

// create a Dynamic HttpRequest for geeting data from server
function getRequest(url){
    let xhr = new XMLHttpRequest();
    xhr.open('get', url)
    xhr.onreadystatechange = function(e){
        if(xhr.readyState === 4){
            if (xhr.status === 200){
                let res = JSON.parse(xhr.response);
                console.log(res);
            }else{
                console.log(new Error(xhr.status));
            }
        }
    }
    xhr.send()
}
// let url = 'https://jsonplaceholder.typicode.com/users';
// getRequest(url);

/*
    *** Asynchronous With CallBack ***
        There are two responsibilty of CallBack
            => Handling of Asynchronous task
            => For specific working, passing function inside another function as a arguments.
*/
function getRequestCallback(url, cb){
    let xhr = new XMLHttpRequest();
    xhr.open('get', url)
    xhr.onreadystatechange = function(e){
        if (xhr.readyState === 4){
            if(xhr.status === 200){
                let res = JSON.parse(xhr.response);
                cb(res, null);
            }else{
                cb(null, new Error(xhr.status));
            }
        }
    }
    xhr.send()
}
// let url = 'https://jsonplaceholder.typicode.com/users';
// getRequestCallback(url, function(res, err){
//     if (res){
//         console.log(res)
//     }else{
//         console.log(err);
//     }
// });

/*
    *** CallBack is not always Asynchronous ***
*/
let arr = [1, 2, 4, 5, 6, 7];
let arr1 = [];
arr.map(function(value){ // this callback works only passing function as a argument, it is not asynchronous.
    arr1.push(value*value);
});
console.log(arr1);

/*
    *** To handle Asynchronous Task, we can use ***
        => bind, apply, call with callback function
        => through use of arrow function
*/
let arr2 = [1, 3, 5, 6, 7];
function asynFun(arr, cb){ // cb is a callback function
    return arr.map(v =>{
        setTimeout(cb.bind(null, v), 1000);
    })
}

asynFun(arr2, function(v){
    console.log(v * v)
})

setTimeout(()=>{
    console.log("============================")
}, 1500)

// antoher way 
function asynFun1 (arr, cb){
    return arr.map(v => {
        setTimeout(()=> cb(v), 2000);
    })
}
asynFun1(arr2, v => {
    console.log(v * 3)
})
/*
    *** Callback Chain with Asynchronous Task ***
        => When we want to work with multiple callback function , callback is not perfect solution
            beacuse, we can not chain callback function, that is why, it is so painful when we want to work 
            with multiple request.
            Solution is to use => Promise construnctor.
*/
function getRequestCallChain(url, cb){
    let xhr = new XMLHttpRequest();
    xhr.open('get', url)

    xhr.onreadystatechange = function(e){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                let res = JSON.parse(xhr.response);
                cb(res, null);
            }else{
                cb(null, xhr.status);
            }
        }
    }
    xhr.send()
}

let url = 'https://jsonplaceholder.typicode.com/users';
getRequestCallChain(url, function(res, err){
   if(err){
       console.log(err)
   }
   let userId = `${url}/3`;
   getRequestCallChain(userId, function(res, err){
       console.log(res)
   })
})