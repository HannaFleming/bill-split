// ставим подслушку на кнопку "Calculate"
const button = document.querySelector('#btn');
button.addEventListener('click',calculateAmount);
//button addTip
const buttonTip = document.querySelector("#addTip");
buttonTip.addEventListener('click',showTip);
        function showTip(e){
            tip.style.display = "block";
            e.preventDefault();
        }

        function calculateAmount(e){
// Функция сохранения команды
e.preventDefault()
    // получаем доступ к Input and Select
    const bill = document.querySelector("#bill").value;
    const people = document.querySelector("#people").value;
    const tip = document.querySelector("#tip").value;
    // показываем alert()
    if (bill === ""|| people === "" || people < 1 ){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        })
    }
    //Формула расчёта
    let amountPerPerson = bill/people;
    // Сколько заплатит один человек
    let tipPerPerson = (bill * tip)/people;
    // Сумма счёта и чаевых
    let totalSum = amountPerPerson + tipPerPerson;

    //Отображаем центы
    amountPerPerson = amountPerPerson.toFixed(2);
    tipPerPerson = tipPerPerson.toFixed(2);
    totalSum = totalSum.toFixed(2);


    //Отображаем расчёт
    document.querySelector("#divideBill").textContent = amountPerPerson;
    document.querySelector("#divideTip").textContent = tipPerPerson;
    document.querySelector("#billAndTip").textContent = totalSum;




}
