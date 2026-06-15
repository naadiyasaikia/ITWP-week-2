const add_user = document.getElementById('input-username');
const add_email = document.getElementById('input-email');
const add_image = document.getElementById('input-image');
const append_data = document.getElementById('submit-data');
const admin_checkbox = document.getElementById('admin-check');
const table = document.getElementById('data-table');
const empty_btn = document.getElementById('empty-table');

append_data.addEventListener('click', () => {
    const username_value = add_user.value.trim();
    const email_value = add_email.value.trim();

    if (username_value === "" || email_value === "") {
        alert("Please fill out both fields!");
        return;
    }

    let existing_row = null;
    for (let i = 1; i < table.rows.length; i++) {
        const row = table.rows[i];
        if (row.cells[0].innerText.trim().toLowerCase() === username_value.toLowerCase()) {
            existing_row = row;
            break;
        }
    }

    function processRowCells(rowElement, isNewRow) {
        let user_data, email_data, admin_data, image_data;

        if (isNewRow) {
            user_data = document.createElement('td');
            email_data = document.createElement('td');
            admin_data = document.createElement('td');
            image_data = document.createElement('td');

            user_data.innerText = username_value;
            rowElement.appendChild(user_data);
            rowElement.appendChild(email_data);
            rowElement.appendChild(admin_data);
            rowElement.appendChild(image_data);
        } else {
            user_data = rowElement.cells[0];
            email_data = rowElement.cells[1];
            admin_data = rowElement.cells[2];
            image_data = rowElement.cells[3];
        }

        email_data.innerText = email_value;

        if (isNewRow) {
            const row_checkbox = document.createElement('input');
            row_checkbox.type = "checkbox";
            row_checkbox.checked = admin_checkbox.checked;
            admin_data.appendChild(row_checkbox);
        } else {
            const existing_cb = admin_data.querySelector('input[type="checkbox"]');
            if (existing_cb) existing_cb.checked = admin_checkbox.checked;
        }

        image_data.innerHTML = "";
        
        const file = add_image.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.classList.add('profile-preview');
                image_data.appendChild(img);
            }
            reader.readAsDataURL(file);
        } else {
            image_data.innerText = "No Image";
        }
    }
    if (existing_row) {
        processRowCells(existing_row, false);
    } else {
        const new_row = document.createElement('tr');
        processRowCells(new_row, true);
        table.appendChild(new_row);
    }

    add_user.value = "";
    add_email.value = "";
    add_image.value = ""; 
    admin_checkbox.checked = false;
});

empty_btn.addEventListener('click', () => {
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
});
