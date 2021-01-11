function deleteNth(arr, x) {
   const map = new Map();

   arr.forEach((e, i) => {
      const tracked = map.get(e);
      if (tracked) {
          map.set(e, { tracked})
      } else {
         map.set(e, 1);
      }
   });

   const newArr = [];
   for (let k of map.keys()) {
      for (var i = 0; i < map.get(k); i++) {
         newArr.push(k);
      }
   }
   console.log(newArr);

   return newArr;
}

deleteNth(
   [
      36,
      31,
      39,
      23,
      31,
      31,
      37,
      37,
      31,
      31,
      39,
      31,
      23,
      31,
      23,
      37,
      23,
      3,
      37,
      3,
      31,
      23,
      39,
      23,
      37,
      31,
      3,
      37,
      37,
      31,
      37,
      3,
      36,
      39,
   ],
   6
);

/*
2,2,2,4,5,6,2,2

3

2,2,4,5,6,2

*/
/*
e:
[36, 31, 39, 23, 31, 31, 37, 37, 31, 31, 39, 31, 23, 23, 37, 23, 3, 37, 3, 23, 39, 23, 37, 3, 37, 3, 36, 39];
g:
[36, 36, 31, 31, 31, 31, 31, 31, 39, 39, 39, 39, 23, 23, 23, 23, 23, 23, 37, 37, 37, 37, 37, 37, 3, 3, 3, 3];
*/
