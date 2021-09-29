var mouseEvent="empty";
var last_position_of_X, last_position_of_Y;
canvas=document.getElementById("myCanvas");
dog=canvas.getContext("2d");
color="yellow";
width_of_circle=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
console.log(color);
width_of_circle=document.getElementById("width_of_circle").value;
mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
        dog.beginPath();
        dog.strokeStyle=color;
        dog.CircleWidth=width_of_circle;

        console.log("Last position of X and Y coordinates=");
        console.log("X="+last_position_of_X+"Y="+ last_position_of_Y);
        dog.moveTo(last_position_of_X,last_position_of_Y);

        console.log("Current position of X and Y coordinates=");
        console.log("x="+current_position_of_mouse_x+"y="+current_position_of_mouse_y);
        dog.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        dog.stroke();
    }
    last_position_of_X=current_position_of_mouse_x;
    last_position_of_Y=current_position_of_mouse_y;
}
function cleararea(){
    dog.clearRect(0,0,canvas.width,canvas.height);
    
}