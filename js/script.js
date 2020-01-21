//эта функция находит схожие с вашими введённми буквами с буквами предложенных слов.
const elastic = document.querySelector('#elastic');

elastic.addEventListener("input", function () {
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
                let str = elem.innerText;
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
);
//данная функция маркерует схожие буквы введённые вами с буквами слов.
const inserMark = (string, pos, len) => (`${string.slice(0, pos)}<mark>${string.slice(pos, pos + len)}</mark>${string.slice(pos + len)}`);
