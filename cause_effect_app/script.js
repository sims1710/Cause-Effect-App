// Test Data
const persons = [
    { id: 1, firstName: "John", lastName: "Doe", address: "123 Main St", phoneNumber: "555-1234", birthday: "1990-01-01" },
    { id: 2, firstName: "Jane", lastName: "Smith", address: "456 Oak Ave", phoneNumber: "555-5678", birthday: "1985-05-15" },
    { id: 3, firstName: "Bob", lastName: "Johnson", address: "789 Pine Blvd", phoneNumber: "555-9876", birthday: "1978-11-30" },
];

// Render person list and add event listeners
const personListUl = document.getElementById("person-list-ul");
const personDetailsDiv = document.getElementById("person-details");

persons.forEach(person => {
    const li = document.createElement("li");
    li.textContent = `${person.firstName} ${person.lastName}`;

    li.addEventListener("click", () => displayPersonDetails(person));
    li.addEventListener("mouseenter", () => displayPersonDetails(person));
    li.addEventListener("mouseleave", clearPersonDetails);

    personListUl.appendChild(li);
});

// Display person details
function displayPersonDetails(person) {
    personDetailsDiv.innerHTML = `
        <h2>${person.firstName} ${person.lastName}</h2>
        <p><strong>Address:</strong> ${person.address}</p>
        <p><strong>Phone Number:</strong> ${person.phoneNumber}</p>
        <p><strong>Birthday:</strong> ${person.birthday}</p>
    `;
}

// Clear person details
function clearPersonDetails() {
    personDetailsDiv.innerHTML = '';
}

