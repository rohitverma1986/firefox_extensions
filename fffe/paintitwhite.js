// var x = document.getElementById('test-edit-area');
// console.log("Hi! There" + x)
// x.style.fontcolor = "white";

function paintItNow(event){
    var x = document.getElementById('test-edit-area');
    if(x.style){
        x.style.color = "white";
        console.log("Painted");        
    }else{
        console.log("not yet found");
    }
    console.log("give up");
}


if(confirm("do you want white font?")){
    setTimeout(function(){paintItNow()}, 2000);
}

console.log("Hi! there");