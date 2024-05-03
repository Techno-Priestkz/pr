function elem(selector) {
    return document.querySelector(selector);
}

function elems(selector) {
    return document.querySelectorAll(selector);
}

let input = elem("input"),
    last_number,
    operation;

elems(".num").forEach(button => {
    button.addEventListener("click", function () {
        let number = this.innerText;
        input.value = input.value + number;
    });
});

elem("#da").addEventListener("click", function(){
    last_number = input.value;
    input.value = "";
    operation = "da";
});

elem("#mi").addEventListener("click", function(){
    last_number = input.value;
    input.value = "";
    operation = "mi";
});

elem("#umu").addEventListener("click", function(){
    last_number = input.value;
    input.value = "";
    operation = "umu";
});

elem("#del").addEventListener("click", function(){
    last_number = input.value;
    input.value = "";
    operation = "del";
});
elem("#step").addEventListener("click", function(){
    last_number = input.value;
    input.value = "";
    operation = "step";
});

elem("#rav").addEventListener("click", function(){
    if (last_number && operation){let result;
        switch (operation) {
            case "da": {
                result = parseInt(last_number) + parseInt(input.value);
            }
                break;
            case "mi": {
                result = parseInt(last_number) - parseInt(input.value);
            }
                break;
            case "umu": {
                result = parseInt(last_number) * parseInt(input.value);
            }
                break;
            case "del": {
                if (parseInt(input.value) !== 0) {
                    result = parseInt(last_number) / parseInt(input.value);
                } else {
                    input.value = "Error";
                    return;
                }
            }
                break;
            case "step": {
                result = Math.pow(parseFloat(last_number), parseFloat(input.value));
            }
                break;
        }
        input.value = result;
        last_number = null;
        operation = null;}

});
elem("#quatro").addEventListener("click",function(){
    let number=parseInt(input.value);
    input.value=Math.pow(number,2)
})
elem("#delet").addEventListener("click",function (){
    input.value="";
    last_number = null;
    operation=null;
});
elem("#koren").addEventListener("click",function(){
    let number=parseInt(input.value);
    input.value=Math.sqrt(parseFloat(number))
    last_number = null;
    operation = null;

})


