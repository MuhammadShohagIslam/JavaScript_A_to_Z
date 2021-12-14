/*
    Promise: Promise is a constructor function of ES6 through which we can create a promise object.
    For creating promise, we need two argument: resolve, reject
    
    Resolve: resolve function are called when our work will be right.

    Reject: reject function are called when our work will be fail.

    *** There are two status of a promise ***

        Pending: Until the work inside promise is completed, until then, it will be pending.

        fulfilled: When it will be completed, it will come resolve.

*/
// create simple promise
let xhr = new Promise((resolve, reject) => {
  if (resolve) {
    setTimeout(() => {
      console.log(resolve("This is one"));
    }, 1000);
  }
});
console.log(xhr);

/*
    *** How can we to work with promise value ***
            
        With try and catch block
            try block => after resolveing, we can get value from resolve through try block

            catch block => when something is rejected, we have to work with catch block

*/
xhr
  .then((v) => {
    console.log(v);
  })
  .catch((err) => {
    console.log(err);
  });

function getPhone(isPassed) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isPassed) {
        resolve("You get Mobile phone from your father");
      } else {
        reject("You are failed, missed Mobile Phone");
      }
    }, 2000);
  });
}
getPhone(false)
  .then((v) => {
    console.log(v);
  })
  .catch((err) => {
    console.log(err);
  });

/*
    *** Implement Fetch API ***
        Fetch API: Fetch is a function through which we can get any data from server or url. This Fetch API
        return a promise. We do not need to work with call back function.

        URL API: it is url in-point.
*/
// create simple Fetch API
let base_url = "https://jsonplaceholder.typicode.com";

// we can not get data directly
fetch(`${base_url}/users`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    return Promise.resolve("Something");
  })
  .then((v) => {
    console.log(v);
    return Promise.resolve("Another Something");
  })
  .then((av) => {
    console.log(av);
  })
  .catch((err) => {
    console.log(err);
  });

// we can get data directly
function getRequest(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("get", url);
    xhr.onreadystatechange = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          let response = JSON.parse(xhr.response);
          resolve(response);
        } else {
          reject(new Error(xhr.status));
        }
      }
    };
    xhr.send();
  });
}
getRequest(`${base_url}/users`)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

/*
    *** Functionalities Comes with Promise ***

    Promise.resolve() => this method will be created instanly resolve method and is called

    Promise.reject() => this method will be created instantly reject method and is called

   Promise.all() => through this method, we can work multiple promise at a time.
                        In this case, we have to pass array of promise inside the all(). 
                        After resolving  every promise, we can be get output
   
   Promise.race() => through this method, we can work multiple promise at a time.
                        In this case, we have to pass array of promise inside the race(). 
                        After resolving, we can be get output only one.
*/
const delay = (s) => {
  return new Promise((resolve) => setTimeout(resolve, s * 1000));
};
delay(1).then((v) => console.log("1 Second Delay"));
delay(2).then((v) => console.log("2 Second Delay"));
delay(3).then((v) => console.log("3 Second Delay"));

let a = Promise.resolve("A");
let b = Promise.resolve("B");
let c = Promise.resolve("C");
a.then((v) => console.log(v));
b.then((v) => console.log(v));
c.then((v) => console.log(v));

let all = Promise.all([a, b, c]);
all.then((arr) => console.log(arr)); // return everything when every promise will be finished at a time.

let g = new Promise((resolve) => setTimeout(resolve, 6000, "One"));
let h = new Promise((resolve) => setTimeout(resolve, 4000, "Two"));
let i = new Promise((resolve) => setTimeout(resolve, 5000, "Three"));

let race = Promise.race([g, h, i]);
race.then((v) => console.log(v)); // return 'two' beacuse race only return one output those which comes first result.
