let string = "";
let buttons = document.querySelectorAll('button');
buttons.forEach(function(elem){
    elem.addEventListener('click', function(e){
        if(e.target.innerHTML == '=') {
            if(string == ""){
                string = "0";
                document.querySelector('input').value = string;
            }
            else{
                string = eval(string);
                document.querySelector('input').value = string;
            }
        }
        else if(e.target.innerHTML == 'C') {
            string = string.slice(0, string.length - 1);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'AC') {
            string = "";
            document.querySelector('input').value = string;
        }
        else {
            string += e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});
