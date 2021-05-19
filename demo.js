// File name: demo.js

import {MyToolkit} from './mytoolkit.js';

// Implement a MyToolkit Button
var draw = SVG().addTo('body').size('1000px', '1000px');
var btn = new MyToolkit.Button(draw)
btn.move(50,1);
btn.setText('hello');

btn.onclick(function(e){
	console.log(e);
});
btn.onmouseout(function(e){
   console.log(e);
});
btn.onmouseover(function(e){
   console.log(e);
});
btn.onmouseup(function(e){
   console.log(e);
})

// Implement a MyToolkit Check Box
var cbox = new MyToolkit.Checkbox(draw);
cbox.move(50, 70);
cbox.setText('check me out')
cbox.onclick(function(e){
    console.log(e);
})
cbox.onmouseout(function(e){
    console.log(e);
})
cbox.onmouseover(function(e){
    console.log(e);
})
cbox.onmouseup(function(e){
    console.log(e);
})

//Implement a MyToolkit Radio Button
var radio = new MyToolkit.RadioButton(draw);
var radio2 = new MyToolkit.RadioButton(draw);
var radio3 = new MyToolkit.RadioButton(draw);
radio.move(50,240);
radio2.move(50,280);
radio3.move(50,320);
radio.setText('tune me')
radio2.setText('these')
radio3.setText('dont work :(')
radio.onclick(function(e){
    console.log(e)
})
radio2.onclick(function(e){
    console.log(e)
})
radio3.onclick(function(e){
    console.log(e)
})

radio.onmouseout(function(e){
    console.log(e)
})
radio2.onmouseout(function(e){
    console.log(e)
})
radio3.onmouseout(function(e){
    console.log(e)
})

radio.onmouseover(function(e){
    console.log(e)
})
radio2.onmouseover(function(e){
    console.log(e)
})
radio3.onmouseover(function(e){
    console.log(e)
})

//Implement a MyToolkit Custom Widget
var switcher = new MyToolkit.CustomWidget(draw);
switcher.move(50,130);
switcher.setText('switch me for dark mode!')
switcher.onclick(function(e){
    console.log(e);
})

//Implement a MyToolkit Progess Bar
var progress = new MyToolkit.ProgressBar(draw);
progress.setWidth(200);
progress.move(50, 200);
progress.setProgress(50)
progress.onmouseover(function(e){
    console.log(e)
})

//Implement a MyToolkit Scroll Bar
var scroll = new MyToolkit.ScrollBar(draw);
//SET HEIGHT FIRST
scroll.setHeight(300);
scroll.move(300,50);

//Implement a MyToolkit Text Box
var txtbox = new MyToolkit.TextBox(draw);
txtbox.move(50, 400)