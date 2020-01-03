//эта функция находит схожие с вашими введённми буквами с буквами предложенных слов.
document.querySelector('#elastic').oninput = function () {
    let val = this.value.trim();
    let elasticItems = document.querySelectorAll('.elastic li');
    if (val != '') {
        elasticItems.forEach(function (elem) {
            if (elem.innerText.search(val) == -1) {
                elem.classList.add('hide');
                elem.innerHTML = elem.innerText;
            }
            else {
                elem.classList.remove('hide');
                var str = elem.innerText;
                elem.innerHTML = inserMark(str, elem.innerText.search(val), val.length);
            }
        });
    } else {
        elasticItems.forEach(function (elem) {
            elem.classList.remove('hide');
            elem.innerHTML = elem.innerText;
        });
    }
}

//данная функция маркерует схожие буквы введённые вами с буквами слов.
function inserMark (string, pos, len) {
    //lol
    //l<mark>o</mark>l
    //l+<mark>+o+</mark>+l
    return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
}