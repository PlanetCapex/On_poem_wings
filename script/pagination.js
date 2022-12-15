let author_id = 0;
let iterator = 0;
let jsp_current_page = 1;
const jsp_records_per_page = 2;

let base_length =  Number(document.getElementById('books').textContent);


function jsp_num_pages() {

     return Math.ceil(base_length / jsp_records_per_page);

}

function jsp_prev_page() {
    if (jsp_current_page > 1) {
        jsp_current_page--;
        iterator--;
        jsp_change_page(jsp_current_page);
    }
}

function jsp_next_page() {
    if (jsp_current_page < jsp_num_pages()) {
        jsp_current_page++;
        iterator++;
        jsp_change_page(jsp_current_page);
    }
}

function jsp_change_page(page) {
    const btn_prev = document.getElementById('button-prev');
    const btn_next = document.getElementById('button-next');
    const listing_table = document.getElementById('listing-table');
    let page_span = document.getElementById('page');
    const author_name = document.getElementById('author')


    if (page < 1) {
        page = 1;
    }
    if (page > jsp_num_pages()) {
        page = jsp_num_pages();
    }

    listing_table.innerHTML = '';
    author_name.innerHTML = '';
    fetch("../storage/content.json")
    .then(response => response.json())
    .then(function(jsp) {
        if((iterator  * jsp_records_per_page) - jsp.content_base[author_id].stihi.length >= 0 ){
            author_id += 1;
            iterator = 0;
        }
        else if (author_id != 0){
            if(iterator  < 0){
                author_id -= 1;
                iterator = jsp.content_base[author_id].stihi.length - jsp_records_per_page;
            }
        }
        for (let i = iterator*jsp_records_per_page ; i < ((iterator + 1) * jsp_records_per_page) && i < jsp.content_base[author_id].stihi.length; i++) {
            listing_table.innerHTML += `<h2>${jsp.content_base[author_id].stihi[i].title}</h2>${jsp.content_base[author_id].stihi[i].content}<hr>`;
        }
        
        author_name.innerHTML = `${jsp.content_base[author_id].author}  `
    });


    page_span.innerHTML = `${page}/${jsp_num_pages()}`;

    btn_prev.style.opacity  = (page === 1) ? '0' : '1';
    btn_next.style.opacity  = (page === jsp_num_pages()) ? '0' : '1';
}

window.onload = () => {
    document.getElementById('button-prev').addEventListener('click', (e) => {
        e.preventDefault();
        jsp_prev_page();
    });

    document.getElementById('button-next').addEventListener('click', (e) => {
        e.preventDefault();
        jsp_next_page();
    });

    jsp_change_page(1);
};