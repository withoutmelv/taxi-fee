module.exports = function main(inputs) {
    var dis=inputs.distance;
    var tim=inputs.parkTime;
    var price=0;
    if(dis<=2){
        price=6+0.25*tim;
    }else if(dis>2&&dis<=8){
        price=6+(dis-2)*0.8+0.25*tim;
    }else{
        price=6+6*0.8+0.25*tim+1.2*(dis-8);
    }
    price=Math.round(price);
    return price;
};