var Form = function() {
    var form = document.createElement('form');
    document.body.appendChild(form);
    for (var i = 0; i < 5; i++) {
        var input = document.createElement('input');
        switch (i) {
            case 0:
            input.type = 'text';
            input id ='name';
            break;
            case 1:
            input.type ='text';
            input.id ='lastName';
            break;
            case 2:
            input.type='email';
            input.id ='email';
            break;
            case 3:
            input.type='password';
            input.id ='password';
            break;
            case 4:
            input.type ='button';
            input.id ='send';
            input.value ='Envoyer';
            input.addEventListener('click', function() {
                alert(checkForm());
            });

        }

        form.appendChild(input);
        var y = document.createElement('y');
        form.appendChild(y);
    }
}

function checkForm() {
    
}