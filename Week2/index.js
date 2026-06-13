const add_user = document.getElementById('input-username');
const add_email = document.getElementById('input-email');
const append_data = document.getElementById('submit-data');
const admin_checkbox = document.getElementById('admin-check');
const table = document.getElementById('data-table');

append_data.addEventListener('click', () => {
    const new_row = document.createElement('tr');
    const user_data = document.createElement('td');
    user_data.innerText = add_user.value; 
    const email_data = document.createElement('td');
    email_data.innerText = add_email.value;
    const admin_data = document.createElement('td');
    const row_checkbox = document.createElement('input');
    row_checkbox.type = "checkbox";
    row_checkbox.checked = admin_checkbox.checked;
    admin_data.appendChild(row_checkbox);

    new_row.appendChild(user_data);
    new_row.appendChild(email_data);
    new_row.appendChild(admin_data);
    table.appendChild(new_row);

    add_user.value = "";
    add_email.value = "";
    admin_checkbox.checked = false;
});