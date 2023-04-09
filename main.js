var heSoA, giaTriA, heSoB, ketQua;
var btn = document.querySelector("#btn1");
var CHAR_55 = 55;
var CHAR_48 = 48;
var btn2 = document.querySelector("#btn2");
var checkRemove = false;
var table = document.getElementById("table1");
var table2 = document.getElementById("table2");
var checktimeTable2 = false;
var a = table.getElementsByTagName("tr");

function Nhap() {
  heSoA = document.getElementById("heSoA");
  giaTriA = document.getElementById("giaTriA");
  heSoB = document.getElementById("heSoB");
  ketQua = document.getElementById("ketQua");
}
var arrHeSoA = [],
  heSoA;
var arrHeSoB = [],
  heSoB;
var arrGiaTriA = [],
  giaTriA;

function HeASangHe10(heSoA, giaTriA, heSoB) {
  // A<10
  var dem2 = 0,
    soDu = 0,
    giaTriChuyenDoiHe10 = 0;
  var demTr_Td = 0,
    doDaiBang = 0;
  var dem = 0;
  var Interval = setInterval(() => {
    if (giaTriA > 0) {
      soDu = giaTriA % 10;
      giaTriChuyenDoiHe10 += soDu * Math.pow(heSoA, parseInt(dem));
      TruyenDuLieuVaoBang(
        dem2,
        soDu + " * " + heSoA + " ^ " + dem,
        giaTriChuyenDoiHe10,
        doDaiBang + 1,
        demTr_Td,
        table2
      );
      ++dem;
      giaTriA = parseInt(giaTriA / 10);
      doDaiBang++;
      dem2++;
      setTimeout(() => {
        demTr_Td += 3;
      }, 3000);
    } else {
      clearInterval(Interval);
      checktimeTable2 = true;
      var he10 = setTimeout(() => {
        clearTimeout(he10);
        chuyenDoiHe10_All(
          giaTriChuyenDoiHe10,
          parseInt(heSoB),
          parseInt(heSoA)
        );
      }, 3000);
    }
  }, 3000);

  // return giaTriChuyenDoiHe10;
}
function HeA_2SangHe10(heSoA, giaTriA, len, heSoB) {
  //A>10
  var luuGiaTriChuyenDoi = 0,
    giaTriChuyenDoiHe10 = 0,
    dem = 0;
  var strGiaTriA = [];
  var dem2 = 0,
    demTr_Td = 0,
    doDaiBang = 0;
  strGiaTriA = giaTriA.split("");
  i = strGiaTriA.length - 1;
  console.log(i);
  var Interval = setInterval(() => {
    if (i >= 0) {
      if (strGiaTriA[i].charCodeAt(0) >= 65) {
        luuGiaTriChuyenDoi = strGiaTriA[i].charCodeAt(0) - parseInt(CHAR_55); // dua ascii ve gia tri thap phan
        giaTriChuyenDoiHe10 +=
          luuGiaTriChuyenDoi * Math.pow(parseInt(heSoA), dem);
        TruyenDuLieuVaoBang(
          dem2,
          strGiaTriA[i].charCodeAt(0) -
            parseInt(CHAR_55) +
            " * " +
            heSoA +
            " ^ " +
            dem,
          giaTriChuyenDoiHe10,
          doDaiBang + 1,
          demTr_Td,
          table2
        );
      } else {
        luuGiaTriChuyenDoi = strGiaTriA[i].charCodeAt(0) - parseInt(CHAR_48); // dua ascii ve gia tri thap phan
        giaTriChuyenDoiHe10 +=
          luuGiaTriChuyenDoi * Math.pow(parseInt(heSoA), dem);
        TruyenDuLieuVaoBang(
          dem2,
          strGiaTriA[i].charCodeAt(0) -
            parseInt(CHAR_48) +
            " * " +
            heSoA +
            " ^ " +
            dem,
          giaTriChuyenDoiHe10,
          doDaiBang + 1,
          demTr_Td,
          table2
        );
      }
      dem++;
      doDaiBang++;
      dem2++;
      setTimeout(() => {
        demTr_Td += 3;
      }, 3000);
      i--;
    } else {
      clearInterval(Interval);
      checktimeTable2 = true;
      var he10 = setTimeout(() => {
        clearTimeout(he10);
        chuyenDoiHe10_All(
          giaTriChuyenDoiHe10,
          parseInt(heSoB),
          parseInt(heSoA)
        );
      }, 3000);
    }
  }, 3000);
}

function chuyenDoiHe10_All(giaTriA, heSoB, heSoA) {
  if (checkRemove == true) {
    RemoveTable();
  }
  var demTd = 0,
    doDaiBang = 0;
  var dem = 0,
    soDu = 0;
  var s = [],
    stringToAscii,
    doDaiDong = 0;
  ketQua.value = null;
  var demTr_Td = 0;
  var checkTimeTable1 = false;
  var Interval = setInterval(() => {
    if (checktimeTable2 == true || heSoA == 10) {
      if (giaTriA > 0) {
        if (heSoB > 10) {
          soDu = giaTriA % heSoB;
          if (soDu >= 10) {
            s[dem] = String.fromCharCode(soDu + CHAR_55);
            TruyenDuLieuVaoBang(
              doDaiDong,
              giaTriA + " / " + heSoB + " = " + parseInt(giaTriA / heSoB),
              soDu,
              doDaiBang + 1,
              demTr_Td,
              table
            );
            ++dem;
          } else {
            s[dem] = String.fromCharCode(soDu + CHAR_48);
            TruyenDuLieuVaoBang(
              doDaiDong,
              giaTriA + " / " + heSoB + " = " + parseInt(giaTriA / heSoB),
              soDu,
              doDaiBang + 1,
              demTr_Td,
              table
            );
            ++dem;
          }
          setTimeout(() => {
            demTr_Td += 3;
          }, 3000);
        } else {
          stringToAscii = parseInt(giaTriA % heSoB) + CHAR_48;
          s[dem] = String.fromCharCode(stringToAscii);
          TruyenDuLieuVaoBang(
            doDaiDong,
            giaTriA + " / " + heSoB + " = " + parseInt(giaTriA / heSoB),
            s[dem],
            doDaiBang + 1,
            demTr_Td,
            table
          );
          dem++;
        }
        giaTriA = parseInt(giaTriA / heSoB);
        if (demTd == 0) {
          doDaiBang++;
          doDaiDong++;
        }
      } else {
        var len = dem - 1;
        table.innerHTML += "<tfoot><tr ><td></td></tr></tfoot>";
        var td = document.querySelectorAll("td");
        td[td.length - 1].innerHTML = "Kết quả = ";
        for (var i = len; i >= 0; i--) {
          ketQua.value += s[i];
          td[td.length - 1].innerHTML += s[i];
        }
        clearInterval(Interval);
        checkRemove = true;
      }
      // else {
      //   checkTimeTable1 = true;
      // }
    }
  }, 3000);
}

btn.onclick = function () {
  var len = 0;
  Nhap();
  for (let index = 0; index < heSoA.value.length; index++) {
    arrHeSoA[index] = heSoA.value.charAt(index);
  }
  for (let index = 0; index < giaTriA.value.length; index++) {
    arrGiaTriA[index] = giaTriA.value.charAt(index);
  }
  for (let index = 0; index < heSoB.value.length; index++) {
    arrHeSoB[index] = heSoB.value.charAt(index);
  }
  if (parseInt(heSoA.value) == parseInt(10)) {
    chuyenDoiHe10_All(
      parseInt(giaTriA.value),
      parseInt(heSoB.value),
      parseInt(heSoA.value)
    );
  } else if (parseInt(heSoA.value) < parseInt(10)) {
    HeASangHe10(
      parseInt(heSoA.value),
      parseInt(giaTriA.value),
      parseInt(heSoB.value)
    );
  } else if (parseInt(heSoA.value) > parseInt(10)) {
    len = giaTriA.value.length;
    HeA_2SangHe10(heSoA.value, giaTriA.value, len, parseInt(heSoB.value));
  }
};
btn2.onclick = function () {
  RemoveTable();
};

function RemoveTable() {
  if (checkRemove == true) {
    var tdd = document.querySelectorAll("td");
    checkRemove = false;
    for (let index = 0; index < tdd.length; index++) {
      console.log(tdd[index]);
      tdd[index].remove();
    }
    heSoA.value = "";
    giaTriA.value = "";
    heSoB.value = "";
    ketQua.value = "";
  }
}
function TruyenDuLieuVaoBang(
  giaTriTd1,
  giaTriTd2,
  giaTriTd3,
  doDaiBang,
  demTr_Td,
  tableElement
) {
  var tr = tableElement.getElementsByTagName("tr");
  var td;

  tableElement.innerHTML += "<tr></tr>";
  tr = tableElement.getElementsByTagName("tr");

  setTimeout(() => {
    tr[doDaiBang].innerHTML += "<td>" + giaTriTd1 + "</td>";
    td = tableElement.getElementsByTagName("td");
    td[demTr_Td].classList.toggle("blink");
    demTr_Td++;
  }, 500);

  setTimeout(() => {
    tr[doDaiBang].innerHTML += "<td>" + giaTriTd2 + "</td>";
    td = tableElement.getElementsByTagName("td");
    td[demTr_Td].classList.toggle("blink");
    demTr_Td++;
  }, 1000);

  setTimeout(() => {
    tr[doDaiBang].innerHTML += "<td>" + giaTriTd3 + "</td>";
    td = tableElement.getElementsByTagName("td");
    td[demTr_Td].classList.toggle("blink");
    demTr_Td++;
  }, 1500);
}
