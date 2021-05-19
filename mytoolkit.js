// File name: mytoolkit.js

import {SVG} from './svg.min.js';

var MyToolkit = (function() {
    //Button
    var Button = function(draw){
        //var draw = SVG().addTo('body').height(100).width(300)
        var rect = draw.rect(100,50).fill('lightgray').stroke({width: 2, color:'black'}).radius(5)
        var label = draw.text('Button');
        
        var clickEvent = null
        var mouseOverEvent = null
        var mouseOutEvent = null
        var mouseUpEvent = null

        rect.mouseover(function(){
            this.fill({ color: 'gray'}).stroke({width: 2, color: 'dimgray'})
            if(mouseOverEvent != null)
                mouseOverEvent(event)
        })
        rect.mouseout(function(){
            this.fill({ color: 'lightgray'}).stroke({width: 2, color: 'black'})
            if(mouseOutEvent != null)
                mouseOutEvent(event)
        })
        rect.mouseup(function(){
            this.fill({ color: 'cyan'})
            if(mouseUpEvent != null)
                mouseUpEvent(event)
        })
        rect.click(function(event){
            this.fill({ color: 'cyan'})
            if(clickEvent != null)
                clickEvent(event)
            console.log("Button Clicked")
        })
        return {
            move: function(x, y) {
                draw.move(x, y)
                rect.move(x, y);
                label.move(x, y+15);
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            },
            setText: function(text){
                label.text(text);
            },
            onmouseover: function(eventHandler){
                mouseOverEvent = eventHandler
            },
            onmouseout: function(eventHandler){
                mouseOutEvent = eventHandler
            },
            onmouseup: function(eventHandler){
                mouseUpEvent = eventHandler
            }
        }
    }
    //Checkbox
    var Checkbox = function(draw){
        //var draw = SVG().addTo('body').size('100%', '100%')
        var rect = draw.rect(25,25).fill('white').stroke({width: 2, color:'black'})
        var label = draw.text('Checkbox');
        
        var clickEvent = null
        var mouseOverEvent = null
        var mouseOutEvent = null
        var mouseUpEvent = null
        
        rect.mouseover(function(){
            this.stroke({width: 2, color: 'gray'})
            if(mouseOverEvent != null)
                mouseOverEvent(event)
        })
        rect.mouseout(function(){
            this.stroke({width: 2, color: 'black'})
            if(mouseOutEvent != null)
                mouseOutEvent(event)
        })
        rect.mouseup(function(){
            if(mouseUpEvent != null)
                mouseUpEvent(event)
        })
        rect.click(function(event){
            var rect2 = draw.rect(21, 21).fill('cyan').move(rect.x()+2, rect.y()+2)
            console.log("Checkbox Checked")
            rect2.click(function(event){
                rect2.remove();
                console.log("Checkbox Unchecked")
            })
            rect2.mouseover(function(){
                rect.stroke({width: 2, color: 'gray'})
            })
            rect2.mouseout(function(){
                rect.stroke({width: 2, color: 'black'})
            })
            if(clickEvent != null)
                clickEvent(event)
        })
        
        
        return {
            move: function(x, y){
                rect.move(x, y)
                label.move(rect.x()+30, rect.y()+5)
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            },
            setText: function(text){
                label.text(text);
            },
            onmouseover: function(eventHandler){
                mouseOverEvent = eventHandler
            },
            onmouseout: function(eventHandler){
                mouseOutEvent = eventHandler
            },
            onmouseup: function(eventHandler){
                mouseUpEvent = eventHandler
            }
        }
    }
    
    //Radio Button
    var RadioButton = function(draw){
        //var draw = SVG().addTo('body').size('100%', '100%')
        var circle = draw.circle(25,25).fill('white').stroke({width: 2, color: 'black'})
        var label = draw.text('Radio Button');
        var counter = true;
        
        var clickEvent = null
        var mouseOverEvent = null
        var mouseOutEvent = null
        var mouseUpEvent = null
        
        circle.mouseover(function(){
            this.stroke({width: 2, color: 'gray'})
            if(mouseOverEvent != null)
                mouseOverEvent(event)
        })
        circle.mouseout(function(){
            this.stroke({width: 2, color: 'black'})
            if(mouseOutEvent != null)
                mouseOutEvent(event)
        })
        circle.mouseup(function(){
            if(mouseUpEvent != null)
                mouseUpEvent(event)
        })
        circle.click(function(event){
            var circle2 = draw.circle(19,19).fill('cyan').move(circle.x()+3, circle.y()+3)
            if(clickEvent != null)
                clickEvent(event)
        })
        
        return {
            move: function(x, y){
                //frame.move(x,y)
                circle.move(x,y)
                label.move(circle.x()+30, circle.y()+3)
            },
            setText: function(text){
                label.text(text);
            },
            onmouseover: function(eventHandler){
                mouseOverEvent = eventHandler
            },
            onmouseout: function(eventHandler){
                mouseOutEvent = eventHandler
            },
            onmouseup: function(eventHandler){
                mouseUpEvent = eventHandler
            }
        }
        
    }
    //Custom Widget (Switch Toggle)
    var CustomWidget = function(draw){
        //var draw = SVG().addTo('body').size('100%','100%');
        var rect = draw.rect(55, 30).fill('lightgray').stroke({width: 2, color: 'black'}).radius(15);
        var circle = draw.circle(30,30).fill('white').stroke({width: 2, color: 'black'})
        var label = draw.text('Switch Toggle');
        var counter = 0;
        
        var clickEvent = null
        //var mouseOverEvent = null
        //var mouseOutEvent = null
        //var mouseUpEvent = null
        
        circle.click(function(event){
            counter++;
            if(counter % 2 != 0){
                rect.fill('lightgreen')
                circle.move(rect.x()+25, rect.y())
                document.body.style.backgroundColor = 'rebeccapurple';
                console.log("Switch Toggled. 'Dark' mode on")
            }
            else{
                rect.fill('lightgray')
                circle.move(rect.x(), rect.y())
                document.body.style.backgroundColor = 'white';
                console.log("Switch Untoggled. 'Dark' mode off")
            }
            if(clickEvent != null)
                clickEvent(event)
        })
        
        rect.click(function(event){
            counter++;
            if(counter % 2 != 0){
                rect.fill('lightgreen')
                circle.move(rect.x()+25, rect.y())
                document.body.style.backgroundColor = 'rebeccapurple';
                console.log("Switch Toggled. 'Dark' mode on")
            }
            else{
                rect.fill('lightgray')
                circle.move(rect.x(), rect.y())
                document.body.style.backgroundColor = 'white';
                 console.log("Switch Untoggled. 'Dark' mode off")
            }
            if(clickEvent != null)
                clickEvent(event)
        })
        
        return {
            move: function(x,y){
                rect.move(x,y)
                circle.move(rect.x(), rect.y())
                label.move(rect.x()+60, rect.y()+5)
            },
            setText: function(text){
                label.text(text)
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler;
            }
        }
    }
    
    var ProgressBar = function(draw){
        //var draw = SVG().addTo('body').size('100%', '100%')
        var rect = draw.rect(1, 10).fill('white').stroke({width: 2, color: 'black'})
        var progressbar = draw.rect(0, 10).fill('lightgreen')
        
        var mouseOverEvent = null
        var mouseOutEvent = null
        var mouseUpEvent = null
        var mouseClickEvent = null
        
        rect.mouseover(function(event){
            rect.stroke({width: 2, color: 'gray'})
            if(mouseOverEvent != null)
                mouseOverEvent(event)
        })
        
        rect.mouseout(function(event){
            rect.stroke({width: 2, color: 'black'})
            if(mouseOverEvent != null)
                mouseOverEvent(event)
        })
        
        return {
            move: function(x,y){
                rect.move(x,y)
                progressbar.move(x,y)
            },
            setWidth: function(width){
                rect.width(width)
            },
            getWidth: function(){
                rect.width()
            },
            setProgress: function(progress){
                progressbar.width((progress / 100) * rect.width())
            },
            onmouseover: function(eventHandler){
                mouseOverEvent = eventHandler
            }
        }
    }
    
    var TextBox = function(draw){
        var box = draw.rect(205, 20).fill('white').stroke({width: 2, color: 'black'})
        var text = draw.text("Hi!").fill('gray')
        var caret = draw.rect(1, 15)
        var runner = caret.animate().width(0)
        runner.loop(1000, 1, 0)
        caret.hide()
        
        var mouseOverEvent = null
        var mouseOutEvent = null
        var mouseUpEvent = null
        var mouseClickEvent = null
        var keyUpEvent = null
        
        SVG.on(window, 'keyup', (event) => {
            //letters, numbers, punctuation
            if((event.which >= 48 && event.which <=90) || (event.which >= 93 && event.which <= 111) || (event.which >= 186 && event.which <= 222)){
                if(text.length() < box.width()-10){
                    text.text(text.text() + event.key)
                    caret.show()
                    caret.x(text.length() + box.x())
                    console.log("Text Changed")
                }
            }else if(event.which == 8){
                //backspace HEHE
                console.log('Word Deleted!')
                text.text(text.text().slice(0, -1))
                caret.x(text.length() + box.x())
            }else if(event.which == 32){
                //spacebar
                text.text(text.text() + " ")
                caret.x(text.length() + box.x() + 5)
            }
            if(keyUpEvent != null)
                keyUpEvent(event)
        })
        box.click(function(){
            caret.show()
            if(mouseClickEvent != null)
                mouseClickEvent(event)
        })
        box.mouseover(function(){
            caret.show()
            if(mouseOverEvent != null)
                mouseOverEvent(event)
        })
        box.mouseout(function(){
            caret.hide()
            if(mouseOutEvent != null)
                mouseOutEvent(event)
        })
        return{
            move: function(x,y){
                box.move(x,y)
                text.move(box.x(), box.y())
                caret.move(box.x()+1+text.length(), box.y()+2)
            },
            onkeyup: function(eventHandler){
                keyUpEvent = eventHandler
            }
        }
    }
    
    var ScrollBar = function(draw){
        //var draw = SVG().addTo('body').size('100%', '100%').height(500)
        var rect = draw.rect(20, 1).fill('white').stroke({width: 2, color: 'black'})
        var upsquare = draw.rect(20,20).fill('lightgray').stroke({width: 2, color: 'black'})
        var downsquare = draw.rect(20,20).fill('lightgray').stroke({width: 2, color: 'black'})
        var uptriang = draw.text('▲').font({size: 10})
        var downtriang = draw.text('▼').font({size: 10})
        var scroller = draw.rect(18, 40).fill('crimson')
        var helddown = false;
        var initialpos = 0;
        
        var mouseOverEvent = null
        var mouseOutEvent = null
        var mouseUpEvent = null
        var mouseClickEvent = null
        var mouseMoveEvent = null
        var mouseDownEvent = null
        
        upsquare.click(function(){
            if(scroller.y() > rect.y()){
                scroller.move(scroller.x(), scroller.y() - 5)
            }
            if(mouseClickEvent != null)
                mouseClickEvent(event)
            console.log('Scroll Up!')
        })
        
        uptriang.click(function(){
            if(scroller.y() > rect.y()){
                scroller.move(scroller.x(), scroller.y() - 5)
            }
            if(mouseClickEvent != null)
                mouseClickEvent(event)
            console.log('Scroll Up!')
        })
        
        upsquare.mouseover(function(){
            upsquare.fill('gray')
            if(mouseOverEvent != null)
                mouseOverEvent(event)
        })
        
        uptriang.mouseover(function(){
            upsquare.fill('gray')
            if(mouseOverEvent != null)
                mouseOverEvent(event)
        })
        
        upsquare.mouseout(function(){
            upsquare.fill('lightgray')
            if(mouseOutEvent != null)
                mouseOutEvent(event)
        })
        
        uptriang.mouseout(function(){
            upsquare.fill('lightgray')
            if(mouseOutEvent != null)
                mouseOutEvent(event)
        })
        
        downsquare.click(function(){
            if(scroller.y() + scroller.height() < rect.y() + rect.height()){
                scroller.move(scroller.x(), scroller.y() + 5)
            }
            if(mouseClickEvent != null)
                mouseClickEvent(event)
            console.log('Scroll Down!')
        })
        
        downtriang.click(function(){
            if(scroller.y() + scroller.height() < rect.y() + rect.height()){
                scroller.move(scroller.x(), scroller.y() + 5)
            }
            if(mouseClickEvent != null)
                mouseClickEvent(event)
            console.log('Scroll Down!')
        })
        
        downsquare.mouseover(function(){
            downsquare.fill('gray')
        })
        
        downtriang.mouseover(function(){
            downsquare.fill('gray')
        })
        
        downsquare.mouseout(function(){
            downsquare.fill('lightgray')
            if(mouseOutEvent != null)
                mouseOutEvent(event)
        })
        
        downtriang.mouseout(function(){
            downsquare.fill('lightgray')
            if(mouseOutEvent != null)
                mouseOutEvent(event)
        })
        
        scroller.mouseover(function(){
            scroller.fill('darkred')
        })
        
        scroller.mouseout(function(){
            scroller.fill('crimson')
            helddown = false
            if(mouseOutEvent != null)
                mouseOutEvent(event)
        })
        
        scroller.mousedown(function(event){
            if(initialpos == 0)
                initialpos = event.clientY
            helddown = true;
            if(mouseDownEvent != null)
                mouseDownEvent(event)
        })
        
        
        scroller.mousemove(function(event){
            if(helddown == true){
                var delta = event.clientY - initialpos
                var scrollerboty = scroller.y() + scroller.height()
                var rectbot = rect.y() + rect.height()
                
                
                //BETTER WORKING (LAST RESORT)
                if(scroller.y() > rect.y() && scrollerboty < rectbot){
                    scroller.y(delta + rect.y() + 1)
                }else if(scroller.y() <= rect.y()){
                    if(delta > 0){
                        scroller.y(delta + rect.y() + 1)
                    }
                }
                console.log('Thumb Moved!')
            }
            if(mouseMoveEvent != null)
                mouseMoveEvent(event)
        })
        
        scroller.click(function(event){
            var scrollerboty = scroller.y() + scroller.height()
            var rectbot = rect.y() + rect.height()
        })
        
        scroller.mouseup(function(event){
            helddown = false;
        })
        
        rect.click(function(event){
            //console.log(event.clientY)
        })
        
        return {
            move: function(x, y){
                rect.move(x,y)
                upsquare.move(x,y-20)
                scroller.move(rect.x()+1, rect.y()+1)
                downsquare.move(x, rect.height()+y)
                uptriang.move(upsquare.x()+5, upsquare.y()+5)
                downtriang.move(downsquare.x()+5, downsquare.y()+5)
            },
            setHeight: function(height){
                rect.height(height)
                scroller.height(height  * .3)
            },
            getHeight: function(){
                rect.height()
            },
            onclick: function(eventHandler){
                mouseClickEvent = eventHandler
            },
            onmousemove: function(eventHandler){
                mouseMoveEvent = eventHandler
            }
        }
    }
    
    //OtherWidgets
    
return {Button, Checkbox, RadioButton, CustomWidget, ProgressBar, ScrollBar, TextBox}
}());

export{MyToolkit}