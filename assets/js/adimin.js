
function addUser(name, email) {

    updateTable();
}

document.getElementById('createUserButton').addEventListener('click', function () {

    var name = document.getElementById('newUserName').value;
    var email = document.getElementById('newUserEmail').value;


    addUser(name, email);

    $('#createUserModal').modal('hide');
});


function updateTable() {

}
function editUser(id, name, email) {

    updateTable();
}
document.getElementById('editUserButton').addEventListener('click', function () {
    var userId = document.getElementById('editUserId').value;
    var newName = document.getElementById('editUserName').value;
    var newEmail = document.getElementById('editUserEmail').value;
    editUser(userId, newName, newEmail);
    $('#editUserModal').modal('hide');
});

function deleteUser(id) {
    updateTable();
}

document.getElementById('deleteUserButton').addEventListener('click', function () {

    var userId = document.getElementById('deleteUserId').value;
    deleteUser(userId);
    $('#deleteUserModal').modal('hide');
});
