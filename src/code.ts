import { from, of, map, filter, Observable } from "rxjs";

// ****set up subscriber****
// let observable$ = new Observable((subscriber) => {
//   subscriber.next("Hello world");
//   subscriber.complete();
//   subscriber.error();

//   return () => {
//     console.log("unsubscribe");
//   };
// });

// const observer = {
//   next: (value: any) => {
//     console.log(value);
//   },
//   complete: () => {
//     console.log("complete called");
//   },
//   error: (err: any) => {
//     console.error("broke");
//   },
// };

// observable$.subscribe(observer);

// ****"of" operator****
// of("teddy", "is", "cool").subscribe({
//   next: (value) => console.log("of:" + value),
//   error: (err) => console.log(err),
//   complete: () => console.log("complete"),
// });

// function handmadeOf(...args: any) {
//   return new Observable((subscriber) => {
//     for (let i = 0; i < args.length; i++) {
//       subscriber.next("handmade:" + args[i]);
//     }

//     subscriber.complete();
//   });
// }

// handmadeOf("Tedy", "is", "cool").subscribe((value) => console.log(value));

// ****"from" operator****
// from(["teddy", "is", "cool"]).subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log("completed!"),
// });

// const promise = new Promise((resolve, reject) => {
//   // resolve("resolve")
//   reject("reject");
// });

// console.log(promise);

// const observableaPromise$ = from(promise); // "from" diff from "of" is can take Promise as arg

// observableaPromise$.subscribe({
//   next: (value) => console.log("observable promise:" + value),
//   error: (err) => console.log(err), // reject
// });

// ****"pipe" operator to transform the values by using other operators such as "map", "filter"****
// const observable$ = from([12, 2, 3, 44, 45]).pipe(map((val: any) => val * 2));
// observable$.subscribe((value) => console.log(value));

// ****"map" operator convert each value in array of args of obserable object such as "from"****
// const numArr = [1, 2, 3, 4];
// const observable$ = from(numArr).pipe(map((value) => value * 4));
// const returnValue = observable$.subscribe((x) => console.log(x));
// console.log(returnValue);

// ****"filter" operator****
const observable$ = from([1, 11, 2, 2, 2]).pipe(filter((num) => num > 2));
const subscribed = observable$.subscribe((val) => console.log(val));
