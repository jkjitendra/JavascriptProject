
setInterval(() => {
    const date = new Date();
    hourtime = date.getHours();
    minutetime = date.getMinutes();
    secondtime = date.getSeconds();

    hrotation = 30*hourtime + minutetime/2 + secondtime/120;
    mrotation = 6*minutetime + secondtime/10;
    srotation = 6*secondtime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;


}, 1000); //run every 1000ms

