//1.1

// const testing = (testing) => {
//   return testing ? console.log("yes") : console.log("no");
// };
// testing(true); // yes

//2.1
// let sum1 = [0, 1, 3, 2];
// const nums = (sum) => {
//   if (sum[0] + sum[1] <= sum[2] + sum[3]) {
//     console.log(sum[0] + sum[1]);
//   } else if (sum[2] + sum[1] <= sum[0] + sum[3]) {
//     console.log(sum[2] + sum[1]);
//
//  } else if (sum[3] + sum[1] <= sum[0] + sum[2]) {
//     console.log(sum[3] + sum[1]);
//   } else if (sum[3] + sum[0] <= sum[1] + sum[2]) {
//     console.log(sum[0] + sum[3]);
//   } else if (sum[2] + sum[0] <= sum[1] + sum[3]) {
//     console.log(sum[0] + sum[2]);
//   } else if (sum[2] + sum[3] <= sum[1] + sum[0]) {
//     console.log(sum[2] + sum[3]);
//   }
// };
// nums(sum1);

//2.2
//////console.log(test.indexOf([test[0]]));
// let realworld = [1, 0, 0, 0];

// for (let i = 0; i <= realworld.length; i++) {
//   for (let j = realworld.length; j >= 0; j--) {
//     // if ( j==0 && realworld[j]==1){
//     //     console
//     // }
//     let ruselt = 8;
//     console.log(ruselt);
//     if (j-- && j >= 0) {
//       ruselt = ruselt * 2;
//       console.log(ruselt);
//     }
//     if (realworld[j] == 1)
//       if (i == realworld.length - j && realworld[j] == 1) {
//         console.log(realworld);
//       }
//   }
// }

// i= lenght alragem-1
// if i= lenght-j

// if (realworld[0] == 1) {
//   console.log(realworld[].length);
// }
// for (let j = 0; j <= realworld.length; j += 1) {
// console.log(ruselt);
// console.log(realworld[j]);
// let ruselt;
// if (j == 0) {
//   ruselt = 8;
//   console.log(ruselt);
// }
// if ((j += 1)) {
//   ruselt /= 2;
//   console.log(ruselt);
// }
//   for (let r = 8; r >= 0; r /= 2) {}
// }
// let array = [1, 2, 3, 4];
// array.indexOf([]);

//2.3
// const nextnums = (num1) => {
//   num1++;
//   console.log(" your next number is : " + " " + num1 * num1);
// };
// nextnums(9);

// 2.4;
// arrays = [1, 1, 1, 3, 1, 1];
// const test = (array) => {
//   if (array[0] != (array[1] && array[2] && array[3] && array[4] && array[5])) {
//     console.log(array[0]);
//   }
//   if (array[1] != (array[0] && array[2] && array[3] && array[4] && array[5])) {
//     console.log(array[1]);
//   }
//   if (array[2] != (array[1] && array[0] && array[3] && array[4] && array[5])) {
//     console.log(array[2]);
//   }
//   if (array[3] != (array[1] && array[2] && array[0] && array[4] && array[5])) {
//     console.log(array[3]);
//   }
//   if (array[4] != (array[1] && array[2] && array[3] && array[0] && array[5])) {
//     console.log(array[4]);
//   }
//   if (array[5] != (array[1] && array[2] && array[3] && array[4] && array[0])) {
//     console.log(array[5]);
//   }
// };
// test(arrays);

//2.5

// var nums = [1, 2, 3, 4, 5];
// var ruselt = 0;
// const test = (real) => {
//   for (var i = real; i >= 0; i--) {
//     ruselt += i;
//   }
//   console.log(ruselt);
// };
// test(3);

//2.6

// const test = (num) => {
//   if (num % 100 == true) {
//     console.log((-(num % 100) + num) / 100 + 1);
//   } else if (num % 100 == false) {
//     console.log(num / 100);
//   } else {
//     console.log("error");
//   }
// };
// test(1000);

//2.7
// let num = ["+", 15, 8];
// const test = (nums) => {
//   // console.log(nums[1] + parseInt(nums[0]) + nums[2]);
//   if (nums[0] == "+") {
//     console.log(num[1] + num[2]);
//   } else if (nums[0] == "-") {
//     console.log(num[1] - num[2]);
//   } else if (nums[0] == "*") {
//     console.log(num[1] * num[2]);
//   } else if (nums[0] == "/") {
//     console.log(num[1] / num[2]);
//   }
// };
// test(num);

//4.1
//do work
// num1 = 1;
// num2 = 1;
// num3 = 2;
// num4 = num3 * 2 - num1;
// num5 = num4 * 2 - num2;
// num6 = num5 * 2 - num3;
// num7 = num6 * 2 - num4;
// num8 = num7 * 2 - num5;
// num9 = num8 * 2 - num6;
// num10 = num9 * 2 - num7;
// num11 = num10 * 2 - num8;
// num12 = num11 * 2 - num9;
// let nums = [
//   num1,
//   num2,
//   num3,
//   num4,
//   num5,
//   num6,
//   num7,
//   num8,
//   num9,
//   num10,
//   num11,
//   num12,
// ];
// console.log(nums);

//wrong
// let nums = [nums[0], nums[1], nums[2], nums[3], nums[4], nums[5], nums[6]];
// const test = (num) => {
//   for (let r = 0; r <= 10; r++) {
//     num[r] = num[r] * 2 - num[r - 2];
//     console.log(num[r]);
//   }
// };
// // for (let r = 0; r <= 10; r++) {
// //   if (r <= 2) {
// //     nums[r] = nums[r] * 2 - nums[r - 2];
// //   }
// //   console.log(num[r]);
// // }

//wrong
// num1 = 1;
// num2 = 1;
// num3 = 2;
// let r;
// while (r <= 4) {
//   r++;

//   nums[r] = nums[r - 1] * 2 - num[r - 3];
//   if (r == 11) {
//     break;
//   }
// }
// let nums = [
//   num1,
//   num2,
//   num3,
//   num4,
//   num5,
//   num6,
//   num7,
//   num8,
//   num9,
//   num10,
//   num11,
//   num12,
// ];
// console.log(nums);

//5.1=
// var names = " 0,1";
// var array = JSON.parse("[" + names + "]"); //   اراي بتحول السترينج
//let arnames = names.split("");
// data.TrimStart('/');// بتمحي كل اشي من هاد النوع
// data.Substring(1);  // بتمحي اخر رقم من السترينج
// let arnames = names.split(" "); // we have this
// solation
// let names = "khadr";
// const blue = (string) => {
//   console.log(string.substring(1, string.length - 1));
// };
// blue(names);

//5.3

// let names = "khdr_";
// const whithout_ = (string) => {
//   console.log(string.replaceAll("_", ""));
// };
// whithout_(names);
// const whithout = (string) => {
//   console.log(string.replaceAll("-", ""));
// };

//5.5

// function getSecondPart(str) {
//   console.log(str.split(" ")[1][0] + "." + str.split(" ")[0][0]);
// }
// getSecondPart("sometext hello");

//5.6

// var string = "4556364607935616";
// const change4 = (strings) => {
//   strings = strings.split("");
//   for (let i = 0; i <= strings.length; i++) {
//     if (i <= strings.length - 5) {
//       strings[i] = "#";
//     }
//   }
//   strings = strings.join("");
//   console.log(strings);
// };
// change4(string);

//5.7
// let names = "1 21";

// const testing = (name) => {
//   name = name.split(" ");
//   if (name[0].length < name[1].length) {
//     console.log(name[0]);
//   } else if (name[1].length < name[0].length) {
//     console.log(name[1]);
//   }
//   // } else if (name[2].length < name[1].length && name[0].length) {
//   //   console.log(name[2]);}
//   else {
//     console.log("error");
//   }
// };
// testing(names);

//6.1
// let tests = "abcd";
// const testing = (test) => {
//   test = test.split("");
//   for (let i = 0; i <= test.length; i++) {
//     if (test.indexOf(test[i]) == i) {
//       for (let j = 0; j <= i; j++) {
//         console.log(test[i]);
//       }
//     }
//   }
//   test = test.join("");
// };
// testing(tests);

//6.2
// let arab = "vcbdoro ";
// const testing = (test) => {
//   test = test.split("");
//   for (let i = 0; i <= test.length; i++) {
//     if (
//       (test[i] == test[i + 1] && test[i + 2] == test[i + 3]) ||
//       (test[i + 1] == test[i + 2] && test[i] == test[i + 3])
//     ) {
//       console.log(2);
//       break;
//     } else if (
//       test[i] == test[i + 1] ||
//       test[i] == test[i + 2] ||
//       test[i] == test[i + 3]
//     ) {
//       console.log(1);
//       break;
//     }
//   }
// };
// testing(arab);

let hi = "abab";
let n = 0;
let r = 1;
let h = [];
const testing = (test) => {
  test = test.split("");

  for (let i = 0; i <= test.length; i++) {
    for (let j = i + 1; j < test.length; j++) {
      if (n == 1) {
        r = 2;
      }

      if (test[i] == test[j]) {
        h[n] = n;
        n++;
        console.log(r);
        break;
      }

      //   if (r != 2 && test[i] == test[j]) {
      //     console.log(1);
      //   }
    }
  }
};
testing(hi);

//6.4
// let arab = "Dermatoglyphics";
// let r;

// const testing = (test) => {
//   test = test.split("");

//   for (let i = 0; i <= test.length; i++) {
//     for (let j = i + 1; j < test.length; j++) {
//       if (test[i] == test[j]) {
//         r = "false";
//         console.log(r);
//         break;
//       }
//     }
//   }
//   if (r != "false") {
//     console.log("true");
//   }
// };

// testing(arab);
