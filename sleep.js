
function sleep(t,f){var o={j:0,i:setInterval(function(){if(++o.j>=1){clearInterval(o.i);f()}},t)}};
sleep(500,function(){console.log('dontsleep!')});


