function clearCanvas(cc) {
  cc.fillStyle = clearColor;
  cc.fillRect(0, 0, canvasWidth, canvasHeight);
}

function drawRect(cc, x, y, w, h, img) {
  cc.drawImage(img, x, y, w, h);
}

function drawImg(cc, img, x, y, w, h) {
  cc.drawImage(img, x, y, w, h);
}

function rectColl(ax, ay, aw, ah, bx, by, bw, bh) {
  if (ax < bx + bw && ax + aw > bx && ay < by + bh && ah + ay > by) {
    return true;
  }
  return false;
}
