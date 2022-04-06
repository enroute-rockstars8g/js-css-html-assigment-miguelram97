const historia = document.getElementById("hist")
historia.innerText = "Hola, tengo 24 años, estoy por cumplir 25 este mes de abril, Me gradué de ingeniería mecatrónica a mediados del 2020 pero por la pandemia pude titularme apenas hace un par de meses, como se puede ver en la foto de arriba, me gustan mucho los gatos jajaja. \n\n Estudié esta carrera porque siempre me ha gustado saber el funcionamiento de nuestro mundo, como funcionan las cosas que usamos y vemos por detrás al igual que los procesos que conlleva. Tengo ya casi 2 años de experiencia laboral, mi primer año fue en una empresa llamada Tamsa, donde realicé mis practicas profesionales y conocí lo que era el analisis de datos, usé mucho power BI para analizar los procesos de la cadena de suministro. \n\n Ahora llevó casi 1 año trabajando en una empresa de consultoria llamada Deloitte donde he trabajado en proyectos donde he usado mis habilidades en SAP ABAP y BODS para desempeñar mis tareas."

const chale = document.getElementById("chale")
chale.innerText = "Profe no me dio tiempo de profundizar mas &#129409; "
function fibo() {
    const fiboNumber = parseInt(document.getElementById("fib").value);
    const fib = [0,1];
    for (let i = 2; i < fiboNumber; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    const container = document.getElementById("resFib");
    fib.forEach(number => {
        const li = document.createElement("li");
        li.innerHTML = number;
        container.append(li);
    });
  }


function fact() {
    const factNumber = parseInt(document.getElementById("fact").value);
    var resFact = factNumber;
    if (factNumber <= 1) {
        resFact = 1;
    }
    else {
        for (let i = factNumber - 1; i>=1; i--) {
            resFact = resFact * i
        }
    }
    const container2 = document.getElementById("resFact")
    container2.innerText = resFact;
}