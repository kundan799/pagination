function cont(x){
    var y=x*10;
    function val(z){
        console.log(x,y,z)
    }
    val(y*5)
}
cont(3)