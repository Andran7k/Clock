window.onload = function () {
    var clock = document.createElement('div');
    var hr = document.createElement('div');
    var mn = document.createElement('div');
    var sc = document.createElement('div');
    
    clock.style.backgroundImage = 'url(watch.png)';
    clock.style.width = '600px';
    clock.style.height = '600px';
    clock.style.backgroundSize = 'cover';
    clock.style.left = ' 400px';
    clock.style.position = 'absolute';
    document.body.appendChild(clock);
    
    hr.style.backgroundImage = 'url(hour.png)';
    hr.style.width = '100%  ';
    hr.style.height = '600px';
    hr.style.backgroundSize = 'cover';
    hr.style.position = 'absolute';
    clock.appendChild(hr);
    
    mn.style.backgroundImage = 'url(minute.png)';
    mn.style.backgroundSize = 'cover';
    mn.style.width = '100%';
    mn.style.height = '600px';
    mn.style.position = 'absolute';
    clock.appendChild(mn)
    
    sc.style.backgroundImage = 'url(second.png)';
    sc.style.backgroundSize = 'cover';
    sc.style.width = '100%';
    sc.style.height = '600px';
    sc.style.position = 'absolute';
    clock.appendChild(sc);
    setInterval(() =>{
        var g = 6;
        var time = new Date();
        var hour = time.getHours() * 30;
        var min = time.getMinutes() * g;
        var sec = time.getSeconds() * g;
        hr.style.transform = `rotateZ(${(hour) + (min/12)}deg)`;
        mn.style.transform = `rotateZ(${(min)}deg)`;
        sc.style.transform = `rotateZ(${(sec)}deg)`;
    })

}