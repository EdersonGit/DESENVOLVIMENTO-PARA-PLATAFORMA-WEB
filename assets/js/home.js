var contacts = [];

function displayContacts() {
    var contactsList = document.getElementById('contactsList');
    contactsList.innerHTML = '';

    if (contacts.length === 0) {
        contactsList.innerHTML = '<p>Nenhum contato adicionado.</p>';
    } else {
        contacts.forEach(function (contact, index) {
            var contactItem = document.createElement('div');
            contactItem.className = 'contact-item';
            contactItem.innerHTML = '<strong>' + contact.name + '</strong> - ' + contact.phone +
                ' <button class="btn btn-link" onclick="editContact(' + index + ')">Editar</button>' +
                ' <button class="btn btn-link" onclick="deleteContact(' + index + ')">Excluir</button>';
            contactsList.appendChild(contactItem);
        });
    }
}

function addContact() {
    var contactName = document.getElementById('contactName').value;
    var contactPhone = document.getElementById('contactPhone').value;

    var newContact = {
        name: contactName,
        phone: contactPhone
    };

    contacts.push(newContact);
    displayContacts();

    document.getElementById('contactName').value = '';
    document.getElementById('contactPhone').value = '';
    $('#addContactModal').modal('hide');
}

function editContact(index) {
    var updatedName = prompt('Editar nome:', contacts[index].name);
    var updatedPhone = prompt('Editar numero:', contacts[index].phone);

    contacts[index].name = updatedName;
    contacts[index].phone = updatedPhone;
    displayContacts();
}

function deleteContact(index) {
    var confirmDelete = confirm('Deseja realmente excluir o contato '  + contacts[index].name +  '?');

    if (confirmDelete) {
        contacts.splice(index, 1);
        displayContacts();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    displayContacts();
});


if (localStorage.getItem("token") == null) {
  alert("Você precisa estar logado para acessar essa página");
  window.location.href = "../HTML/signin.html";
}

const userLogado = JSON.parse(localStorage.getItem("userLogado"));

const logado = document.querySelector("#logado");
logado.innerHTML = `Olá, ${userLogado.nome}`;

function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "../HTML/signin.html";
}

function openAdminPanel() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "../HTML/admin.html";
  }
