function calculate() {
    const doanhThu = parseFloat(document.getElementById('doanhThu').value);
    const khoanChi = parseFloat(document.getElementById('khoanChi').value);
    const soTui = parseFloat(document.getElementById('soTui').value);
    
    if (isNaN(doanhThu) || isNaN(khoanChi) || isNaN(soTui)) {
        alert('Vui lòng nhập đầy đủ các giá trị!');
        return;
    }

    const ketQua = (doanhThu + khoanChi - (soTui * 12)) / 5;
    document.getElementById('result').innerText = Math.round(ketQua);
}
