function clearCanvas(cc){
    cc.fillStyle=clearColor;
    cc.fillRect(0,0,cw,ch);
}

function drawRect(cc,x,y,w,h,color){
    cc.fillStyle=color;
    cc.fillRect(x,y,w,h);
}

function drawImg(cc,img,x,y,w,h){
    cc.drawImage(img,x,y,w,h);
}

function rectColl(ax,ay,aw,ah,bx,by,bw,bh){
    if (ax < bx + bw &&
        ax + aw > bx &&
        ay < by + bh &&
        ah + ay > by) {
        return true;
    }
    return false;
}

var Vec=function(x,y){
    this.x=x;this.y=y;
};
