const btnLibros = document.querySelector('.btnData');


function loadBooks(){

    fetch('js/data.json')
    .then (res => res.json())
    .then(books =>{

        document.querySelector('section').innerHTML = books.map(book =>`

             <div class="bookCard">
                <h2>${book.title}</h2>
                <p>${book.details}</p>
                <p>${book.description}</p>
            </div>
            
            `).join(" ");

    })
}

function changeStyle(){
    document.body.classList.toggle('colorMode');
}

btnLibros.addEventListener('click', loadBooks);
document.querySelector('.btnStyle').addEventListener('click', changeStyle);