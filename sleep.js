function sleep(t,f){var e=setInterval(function(){if(++o.j>=1){clearInterval(o.i);f()}},t),o={j:0,i:e}};
sleep(500,function(){console.log('dontsleep!')});
