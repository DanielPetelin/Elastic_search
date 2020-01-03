<h1>Elastic_search</h1>
<p>Я дам вам код, что бы вы сами могли попробовать.</p>
<h3>HTML</h3>

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://unpkg.com/mustard-ui@latest/dist/css/mustard-ui.min.css">
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <h1>Elastic search</h1>
    <input type="text" id="elastic">
    <ul class="elastic">
        <li>Lorem</li>
        <li>dollor</li>
        <li>lol</li>
        <li>Amperka</li>
        <li>consectetur</li>
        <li>meme</li>
        <li>elit</li>
        <li>do</li>
        <li>hello world</li>
        <li>tempor</li>
        <li>incididunt</li>
    </ul>
<script src="./js/script.js"></script>
</body>
</html>
```

<h3>JavaScript</h3>

```
// эта функция находит схожие с вашими, введённми буквами с буквами, предложенных слов, буквы.
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

// данная функция маркирует схожие буквы, введённые вами с буквами, предложенных слов.
function inserMark (string, pos, len) {
    //lol
    //l<mark>o</mark>l
    //l+<mark>+o+</mark>+l
    return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
}
```

<h3>CSS</h3>

```
body {
    width: 500px;
    height: 500px;
    margin: auto;
}

#elastic {
    display: block;
    margin: 40px 0px;
}

.elastic li.hide {
    display: none;
}
```
<h2>Для вас</h2>
<p>Если вам не понравилась жёлтая маркировка текста, то можете её исправить. Вот код.</p>

```
mark {
    background-color: /* ваш цвет например: */ blue;
}
```

<h2>Благодарности</h2>
<p>https://www.youtube.com/watch?v=vV4cUAZvEy4&list=PLM7wFzahDYnG-oMkclNX0FIcLZR18hFDM&index=54 (урок на YouTube)</p>
<p>https://github.com/kylelogue/mustard-ui (CSS framework)</p>
