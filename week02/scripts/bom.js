const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');


button.addEventListener('click', function () {

    if (!inputField.value.trim()) {
        const li = document.querySelector('li');
        li.textContent = input.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        deleteButton.addEventListener('click', function () {
            list.removeChild(li); 
        });

        li.append(deleteButton);
        list.append(li);

        input.value = '';
        input.focus();
    } else {
        alert('Please enter a chapter name.');
        input.focus();
    }

    
});

