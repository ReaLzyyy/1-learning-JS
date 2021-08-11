/* 
find prime numbers from 2 to 100

HUMAN STEPS:
1.Need to check all the numbers through 2 to 100;
2.Need to divide every number from 2 to itself (not including)
3.While dividing check if it divides with remainder
4. if there's remainder - prime number
5. if there's no remainder - not a prime number
*/
var n = 2;
while (n <= 100) {
    var divider = 2;
    var prime = true;
    while (divider < n) {
        if (n % divider == 0) {
            prime = false;
        }
        divider += 1;
    }
    if (prime) {
        console.log(n);
    }
    n += 1;
}
/* 
n: 2
divider: 2
prime: true

print n:
2;
*/
