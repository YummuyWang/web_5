"use strict"
var _data = [], info_body;
//多处借鉴（抄袭）网上方法

function $(id) {
    return document.getElementById(id);
}

function getStudent(id) {
    for (var i = 0; i < _data.length; i++) {
        if (_data[i].id == id) {
            return _data[i];
        }
    }
    return null;
}

function Student(name, Class, Chi, math, Eng, scien) {
    var Sum;
    this.name = name ? name : null;
    this.Class = Class ? Class : null;
    this.Chi = Chi ? Chi : 0;
    this.math = math ? math : 0;
    this.Eng = Eng ? Eng : 0;
    this.scien = scien ? scien : 0;
    this.sum=Chi+Eng+math+scien;
}

function addHandler() {
    var stu = new Student();
    stu.name = $('nName').value.trim();
    stu.Class = $('nClass').value.trim();
    stu.Chi = $('nChi').value.trim();
    stu.math = $('nMath').value.trim();
    stu.Eng = $('nEng').value.trim();
    stu.Scien = $('nScien').value.trim();
    stu.sum=(parseFloat($('nChi').value.trim())+parseFloat($('nMath').value.trim()) +parseFloat($('nEng').value.trim())+parseFloat($('nScien').value.trim()));;
    if (valid(stu)) {
        _data.push(stu);
        $('resetButton').click();
    }
    show(_data);
}

function valid(student) {
    if (student.name == '') {
        alert('姓名不能为空')
        return false;
    }
    if (student.Class == '') {
        alert(('班级不能为空'))
        return false;
    }
    if (student.Chi == '' || student.Chi < 0) {
        alert('输入错误')
        return false;
    }
    if (student.math == '' || student.math < 0) {
        alert('输入错误')
        return false;
    }
    if (student.Eng == '' || student.Eng < 0) {
        alert('输入错误')
        return false;
    }
    if (student.Scien == '' || student.scien < 0) {
        alert('输入错误')
        return false;
    }
    return true;
}

function show(data) {
    info_body = info_body || $('info-body');
    var html = [];
    for (var i = 0; i < data.length; i++) {
        html.push('<tr>');
        html.push(('<td>' + data[i].name + '</td>'));
        html.push(('<td>' + data[i].Class + '</td>'));
        html.push(('<td>' + data[i].Chi + '</td>'));
        html.push(('<td>' + data[i].math + '</td>'));
        html.push(('<td>' + data[i].Eng + '</td>'));
        html.push(('<td>' + data[i].Scien + '</td>'));
        html.push(('<td>'+  data[i].sum +'</td>'));
        html.push('</tr>');
    }
    info_body.innerHTML = html.join("");
}
function sorry() {
    alert('并没有实现');
}

