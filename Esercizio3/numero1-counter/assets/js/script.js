function tempo() {
    let sec;
    if (sessionStorage.getItem('timer') == null) {
        sec = 0;
    } else {
        sec = sessionStorage.getItem('timer');
        sec = parseInt(sec);
    }
    setInterval(() => {
        sec++
        sessionStorage.setItem('timer', sec);
        document.getElementById('timer').innerHTML = `Sei online da ${sec} secondi!`;
    }, 1000);
}

tempo();


// PROVA 1 - ricaricando non funziona

// var timer = document.getElementById('timer');
// var sec = 0;
// var min = 0;

// setInterval(tempo, 1000);

// function tempo() {
//     sec++;
    // if (sec == 60) {
    //     sec = 0;
    //     min++;
    // }

//     timer.innerHTML = `Sei online da ${min} minuti e ${sec} secondi!`;

//     sessionStorage.setItem('timer', `${min} min e ${sec} sec`);
// }