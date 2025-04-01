const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
  displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != '' && !chaptersArray.includes(input.value)) {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    } else {
        alert('Chapter already exists or input is blank!');
    }
});

function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', () => {
        list.removeChild(li); 
        deleteChapter(li.textContent);
        input.focus(); 
    });
}

function setChapterList() {
    localStorage.setItem('BOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('BOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); 
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList(); 
}
