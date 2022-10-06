function Chuyendoitien() {
    let SL = document.getElementById('SL').value;
    let Tu = document.getElementById('Tu').value;
    let Toi = document.getElementById('Toi').value;
    let Result;

    if (Tu == 'USD' && Toi == 'VND') {
        Result = 'Kết quả:' +(SL* 23000)+ "Đ";
    }
    else if (Tu == 'VND' && Toi == 'USD'){
        Result = 'Kết quả:' +(SL/23000) + '$';
    }
    else if (Tu == 'VND') {
        Result = 'Kết quả: ' + SL + 'Đ'
    }
    else {
        Result = 'Kết quả: ' + SL + '$'
    }
    document.getElementById('Result').innerHTML = Result;
}