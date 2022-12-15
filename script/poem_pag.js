let jsp_current_page = 1;
const jsp_records_per_page = 6;
let base_length = Number(document.getElementById('length').textContent);

function jsp_num_pages() {

     return Math.ceil(base_length / jsp_records_per_page);

}

function jsp_prev_page() {
    if (jsp_current_page > 1) {
        jsp_current_page--;
        jsp_change_page(jsp_current_page);
    }
}

function jsp_next_page() {
    if (jsp_current_page < jsp_num_pages()) {
        jsp_current_page++;
        jsp_change_page(jsp_current_page);
    }
}

function jsp_change_page(page) {
    const btn_prev = document.getElementById('button-prev');
    const btn_next = document.getElementById('button-next');
    const listing_table = document.getElementById('listing-table');
    let page_span = document.getElementById('page');


    if (page < 1) {
        page = 1;
    }
    if (page > jsp_num_pages()) {
        page = jsp_num_pages();
    }

    listing_table.innerHTML = '';
    fetch("../storage/chitati.json")
    .then(response => response.json())
    .then(function(jsp) {

        for (let i = (page-1)*jsp_records_per_page; i < (page * jsp_records_per_page) && i < jsp.content_base.length; i++) {
            listing_table.innerHTML += `<h2>${jsp.content_base[i].author}</h2>${jsp.content_base[i].chit}<hr>`;
        }
        base_length = jsp.content_base.length;
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