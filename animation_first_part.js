let anim = document.getElementsByClassName("anim")[0];
anim.innerHTML = "<img id='green_ball1111' src='green_ball_part1_new.png'>";
anim.innerHTML += "<img id='red_ball1111' src='red_ball_part1_new1.png'>";


let main_green_ball = document.getElementById('green_ball1111');
let main_red_ball = document.getElementById('red_ball1111');
let work = document.getElementsByClassName("work")[0];

console.log("init");


var delay = 80;
var delay2 = 80;
var max_time = 10000;

var position = {
    i: 0,
    i_red: 0,
    green_moving_flag: 1,
    red_moving_flag: 1,
    mov_permit: 1,
    flag: 1,
    newGameMarker: 1,
};

function ball_animation(){
    console.log("function start");

        starttimer = function () {
            if (position.mov_permit == 1) {
                var bottom = main_green_ball.offsetTop;

                if (position.green_moving_flag == 1) {
                    if (position.i < 97) {
                        setTimeout(starttimer, delay);
                        main_green_ball.style.marginLeft = (position.i + '%');
                    }
                    position.i++;
                    if (position.i >= 97) {
                        position.green_moving_flag = 0;
                    }

                }

                if (position.green_moving_flag == 0) {
                    if (position.i > 0) {
                        setTimeout(starttimer, delay);
                        main_green_ball.style.marginLeft = (position.i + '%');
                    }
                    position.i--;
                    if (position.i == 0) {
                        position.green_moving_flag = 1;
                    }
                }
            }
        };
        starttimer2 = function () {
            if (position.mov_permit == 1) {
                if (position.red_moving_flag == 1) {
                    if (position.i_red < 42) {
                        setTimeout(starttimer2, delay2);
                        main_red_ball.style.marginTop = (position.i_red + '%');
                    }
                    position.i_red++;
                    if (position.i_red >= 42) {
                        position.red_moving_flag = 0;
                    }
                }
                if (position.red_moving_flag == 0) {
                    if (position.i_red > 0) {
                        setTimeout(starttimer2, delay2);
                        main_red_ball.style.marginTop = (position.i_red + '%');
                    }
                    position.i_red--;
                    if (position.i_red <= 0) {
                        position.red_moving_flag = 1;
                    }
                }
                if ((position.i_red == 24 || position.i_red == 16) && position.i >= 49 && position.i <= 50) {final_button_animation();}
                if ((position.i_red == 23 || position.i_red == 17) && position.i >= 48 && position.i <= 51) {final_button_animation();}
                if ((position.i_red >= 18 && position.i_red <= 22) && position.i >= 47 && position.i <= 52) {final_button_animation();}
            }

        }
    var timer = setTimeout(starttimer, delay);
    var timer2 = setTimeout(starttimer2, delay2);
}
function start_button_animation() {
    position.mov_permit = 1;
    if(position.newGameMarker == 1){
        position.i = 1;
        position.i_red = 0;
        position.newGameMarker = 0;
    }
    if(position.flag == 1) {ball_animation(); window.setInterval(final_button_animation, max_time);}
    let button_part56 = document.getElementsByClassName('controls')[0];
    let newContent56 = '<div class="button_control_part"><button id="start_button_id" onclick="end_button_animation();" >stop</button><button id="close_button_id" onclick="close_button();" >close</button></div>';
    let newContent561 = '<h5>some start message!</h5>';
    button_part56.innerHTML = newContent561 + newContent56;
    let now56 = new Date();
    var str56 = String(Math.floor(Math.random()*1000000));
    console.log(str56 + 'some start message!' + '----'+ now56 );
    localStorage.setItem(str56, 'some start message!' + '----'+ now56 );
    ball_animation();
};
function end_button_animation() {
    position.mov_permit = 0;
    let button_part57 = document.getElementsByClassName('controls')[0];
    let newContent57 = '<div class="button_control_part"><button id="end_button_id" onclick="start_button_animation();" >start</button><button id="close_button_id" onclick="close_button();" >close</button></div>';
    let newContent11 = '<h5>some stop message!</h5>';
    button_part57.innerHTML = newContent11 + newContent57;

    let now57 = new Date();
    var str57 = String(Math.floor(Math.random()*1000000));
    localStorage.setItem(str57, 'some stop message!' + '----'+ now57);
};
function final_button_animation() {
    position.mov_permit = 0;
    position.newGameMarker = 1;
    let button_part58 = document.getElementsByClassName('controls')[0];
    const button_partContent2 = button_part58.innerHTML;
    let newContent58 = '<div class="button_control_part"><button id="final_button_id" onclick="start_button_animation();" >reload</button><button id="close_button_id" onclick="close_button();" >close</button></div>';
    let newContent581 = '<h5>some final message!</h5>';
    button_part58.innerHTML = newContent581 + newContent58;

    let now58 = new Date();
    var str58 = String(Math.floor(Math.random()*1000000));
    localStorage.setItem(str58, 'some final message!' + '----'+ now58 );
};






