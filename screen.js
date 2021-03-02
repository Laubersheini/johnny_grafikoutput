var canvas = document.getElementById("screen");
var ctx = canvas.getContext("2d");

var framebufferStart = ramSize -resolution**2



function updateScreen(address){
  if(address >= framebufferStart){
    if(Ram[address]>=255){
      ctx.fillStyle = "#ffffff"

    }else{
      let asHex = Ram[address].toString(16)
      ctx.fillStyle = "#" + asHex +asHex +asHex
    }
    let x = (address - framebufferStart) % resolution
    let y = Math.floor((address - framebufferStart)/resolution);
    ctx.fillRect(x * pixelSize,y *pixelSize,pixelSize,pixelSize)

  }

}
