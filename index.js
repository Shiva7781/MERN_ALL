let num = 1634;

let ans = num.toString();
let len = num.toString().length;

let sum = 0;
for (let i = 0; i < ans.length; i++) {
  sum += Number(ans[i]) ** len;
}

if (sum == num) {
  console.log(`${num} is a Armstrong number & sum is ${sum}`);
} else {
  console.log(num + " is not a Armstrong number & sum is " + sum);
}
