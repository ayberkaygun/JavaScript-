
function findPrime() {
    let primeNumbers = [];
    for (let i = 0; i < arguments.length; i++) {
        let isPrime = true;
        let instanceNum = arguments[i];
        for (let j = 2; j < instanceNum; j++) {
            if (instanceNum % j == 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            if (instanceNum > 1) {
                primeNumbers.push(instanceNum)
            }
        }
    }
    console.log("Prime Numbers : " + primeNumbers.toString());
}

function friendsNumber() {
    if (arguments.length != 2) {
        console.log("Please enter only two numbers!!!");
    }
    else {
        let indexBirBolenler = 0;
        let indexIkiBolenler = 0;
        let argumentOne = arguments[0];
        let argumentTwo = arguments[1];
        for (let param1 = 1; param1 < argumentOne; param1++) {
            if (argumentOne % param1 == 0) {
                indexBirBolenler += param1;
            }
        }
        for (let param2 = 1; param2 < argumentTwo; param2++) {
            if (argumentTwo % param2 == 0) {
                indexIkiBolenler += param2;
            }
        }
        if ((indexBirBolenler == argumentTwo) && (indexIkiBolenler == argumentOne)) {
            console.log(argumentOne + " and " + argumentTwo + " are friend numbers.")
        }
        else {
            console.log(argumentOne + " and " + argumentTwo + " are not friend numbers.")
        }
    }
}

function perfectNumbersUpToThousand() {
    let mukemmelSayilar = [];
    //let bolenler = 0;
    for (let i = 2; i <= 1000; i++) {
        let bolenler = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                bolenler += j;
            }
        }
        if (bolenler == i * 2) {
            mukemmelSayilar.push(i)
        }
    }
    console.log("Perfect Numbers : " + mukemmelSayilar.toString())

}

function findPrimeNumbersUpToThousand() {

    let primeArr = []
    for (let i = 2; i <= 1000; i++) {
        let isPrime = true;
        if (i == 2) {
            primeArr.push(i)
        }
        else {
            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                    isPrime = false;
                }
            }
            if (isPrime) {
                primeArr.push(i);
            }
        }
    }
    console.log("Prime numbers up to a thousand : " + primeArr.toString());
}

findPrime(1, 2, 5, 8, 21, 13, 0)

friendsNumber(220, 284)

perfectNumbersUpToThousand()

findPrimeNumbersUpToThousand()