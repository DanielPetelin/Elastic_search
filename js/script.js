document.querySelector('#elastic').oninput = function() {
    var val = this.value.trim();
    var elasticItems = document.querySelectorAll('.elastic li');
    if (val != '') {
        elasticItems.forEach(function(elem) {
            if (elem.innerText.search(val) == -1) {
                elem.classList.add('hide');
            };
        });
    };
};