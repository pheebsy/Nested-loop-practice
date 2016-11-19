//this[["KAInfiniteLoopCount"]] = -100000;
background(189, 222, 240);

    
    //ground under building
    noStroke ();
    fill(158, 158, 168);
    rect(0, 250, 400, 310);
    
    //back of building left
    fill(102, 166, 118);
    triangle(0, 220, 90, 220, 0, 300);
    
    //shadow from fence
    fill(100, 135, 101);
    rect(0, 210, 50, 10);
    
    //back of building right
    fill(158, 158, 168);
    rect(360, 230, 40, 20);
    
    //back neighbour building
    fill(78, 84, 89);
    rect(360, 70, 40, 160);
    fill(178, 182, 189);
    triangle(300, 70, 400, 70, 400, 55);
    
    //back yard fence
    image(getImage("cute/RoofSouth"), 0, 170, 25, 40);
    image(getImage("cute/RoofSouth"), 25, 170, 25, 40);
    fill(44, 44, 46, 110);
    rect(0, 180, 50, 30);
    

    //grass nested loop
    fill(89, 125, 75);
    rect(0, 370, 400, 30);
    strokeWeight(1);
    for (var g = 0; g <= 400; g += 1) {
        for (var h = 370; h <= 400; h += 10) {
            if (g % 2 === 1) {
            stroke(62, 99, 57);
            //line(g, h, g + random(1, 4), h + random(8, 13)); random lght grass
            line(g, h, g ++, h + 10);
            } else {
                stroke(107, 145, 82);
                //line(g, h, g + random(1, 4), h + random(8, 13)); random lght grass
                line(g, h, g++, h + 12);
            }
        }
    }
    
    noStroke();
    
    //road
    fill(61, 53, 53);
    rect(0, 310, 400, 60);
    
    //road markings nested loop
    for (var n = 0; n <= 399; n += 40) {
        for (var m = 325; m <= 355; m += 15) {
            if (m === 340) {
                strokeWeight(4);
                stroke(163, 163, 88);
                line(n, m, n + 16, m);
            } else {
        strokeWeight(1);
        stroke(255, 255, 255);
        line(n, m, n + 12, m);
        
            }
        }
    }
    
    //pavement
    noStroke();
    fill(209, 197, 197);
    rect(0, 300, 400, 10);

    //shadow cast by building
    fill(44, 44, 46, 140);
    quad(50, 300, 360, 250, 400, 350, 69, 400);
    triangle(400, 350, 400, 400, 69, 400);
    
    //back neighbour building shadow
    fill(44, 44, 46, 140);
    triangle(355, 230, 400, 230, 400, 331);

    //building
    strokeWeight(1);
    stroke(179, 173, 173);
    fill(224, 220, 224);
    rect(50, 20, 280, 280);
    fill(145, 126, 126);
    quad(330, 20, 360, 10, 360, 250, 330, 300); 

     //brickwork nested loop
    for (var j = 20; j <= 298; j += 4) {
        for (var i = 50; i <= 326; i += 8) {
           fill(166, 143, 143);
            rect(i, j, 8, 4);
        }
    }

    //windows nested loop
    for (var m = 26; m <= 284; m += 40) {
        for (var k = 60; k <= 322; k += 40) {
            stroke(102, 82, 92);
            fill(162, 168, 189);
            rect(k, m, 20, 30);
        }
    }
    
    //window shading nested loop
    for (var m = 27; m <= 284; m += 40) {
        for (var k = 60; k <= 322; k += 40) {
    strokeWeight(3);
    line(k + 1, m + 28, k + 18, m + 28);
    line(k, m, k, m + 28);
        }
    }
    
    noStroke();
   //roof
    fill(224, 220, 224);
    quad(112, 10, 360, 10, 330, 20, 50, 20);
    
    //door
    fill(10, 3, 3);
    rect (172, 264, 17,36);
    rect (191, 264, 17, 36);
    fill (10, 3, 3, 150);
    rect (172, 264, 36, 36);
    
