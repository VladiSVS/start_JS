function intro(a) {
    a = 1 + 3
    console.log("Hello world", "1 + 3 = " + a)
}

intro()

function intro2(paramName) {
    var name = "SuperCoder"
    console.log("Hi, " + name + ". Main Name ist " + paramName + ".")
}

intro2("Vladi")

function intro3(name, stadt, alt) {
    name = "Wladimir"
    stadt = "Essen"
    alt = "25"
    console.log("Hallo, mein name ist " + name + ". Ich bin " + alt + " Jahre Alt." + " Ich komme aus " + stadt + ".")
}

intro3()



function match(a, b) {
    console.log(a * b)
    console.log(a / b)
}

match(10, 2)
match(30, 20)
match(100, 100)
match(5, 0)
match(45, 173)
match(1, 1000)