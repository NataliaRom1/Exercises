'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let tbody = table.querySelector('tbody');
    for (let row of tbody.rows) {
    
        let ageCell = row.cells[1];
        let genderCell = row.cells[2];
        let statusCell = row.cells[3];
        
        if (statusCell.dataset.available === 'true') {
            row.classList.add('available')
        } else if (statusCell.dataset.available === 'false') {
            row.classList.add('unavailable')
        } else if (statusCell.dataset.available === undefined) {
            row.hidden = true;
        }
        
        if (genderCell.innerHTML === 'm') {
            row.classList.add('male')
        } else {
            row.classList.add('female')
        }
        
        if (+ageCell.innerHTML < 18) {
            row.style.textDecoration = "line-through"
        }
 }
}

