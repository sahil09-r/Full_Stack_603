let expenses = [];
let editIndex = -1;

function showTable() {
  let tbody = document.querySelector("#expenseTable tbody");
  tbody.innerHTML = "";

  for (let i = 0; i < expenses.length; i++) {
    let exp = expenses[i];
    let row = `<tr>
      <td>${exp.name}</td>
      <td>${exp.amount}</td>
      <td>${exp.category}</td>
      <td>
        <button onclick="editExpense(${i})">Edit</button>
        <button onclick="deleteExpense(${i})">Delete</button>
      </td>
    </tr>`;
    tbody.innerHTML += row;
  }

  showTotal();
}

function addExpense() {
  let name = document.getElementById("expenseName").value;
  let amount = Number(document.getElementById("expenseAmount").value);
  let category = document.getElementById("expenseCategory").value;

  if (name !== "" && amount > 0) {
    expenses.push({ name: name, amount: amount, category: category });
    showTable();
    clearForm();
  } else {
    alert("Enter valid details");
  }
}

function editExpense(index) {
  editIndex = index;
  let exp = expenses[index];
  document.getElementById("expenseName").value = exp.name;
  document.getElementById("expenseAmount").value = exp.amount;
  document.getElementById("expenseCategory").value = exp.category;
}

function updateExpense() {
  if (editIndex !== -1) {
    expenses[editIndex].name = document.getElementById("expenseName").value;
    expenses[editIndex].amount = Number(document.getElementById("expenseAmount").value);
    expenses[editIndex].category = document.getElementById("expenseCategory").value;
    showTable();
    clearForm();
    editIndex = -1;
  } else {
    alert("Select an expense to update");
  }
}

function deleteExpense(index) {
  expenses.splice(index, 1);
  showTable();
}

function showTotal() {
  let total = 0;
  for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].amount;
  }
  document.getElementById("totalAmount").innerText = "Total: " + total;
}

function clearForm() {
  document.getElementById("expenseName").value = "";
  document.getElementById("expenseAmount").value = "";
  document.getElementById("expenseCategory").value = "Food";
}