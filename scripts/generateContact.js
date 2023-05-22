function contactTemplate(name, telephone, email, notes, type) {
  const li = document.createElement("li");
  li.textContent += name;

  if (telephone) {
    const strong = document.createElement("strong");
    strong.textContent = "Tel: ";
    li.append(document.createElement("br"), strong, telephone);
  }

  if (email) {
    const strong = document.createElement("strong");
    strong.textContent = "Email: ";
    li.append(document.createElement("br"), strong, email);
  }

  if (notes) {
    li.append(document.createElement("br"), notes);
  }

  const span = document.createElement("span");
  span.innerText = type;
  li.append(span);

  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeContact(removeButton);
  li.append(removeButton);

  return li;
}

function generateContact(name, telephone, email, notes, type) {
  const li = contactTemplate(name, telephone, email, notes, type);

  const ul = document.querySelector("ul");
  ul.append(li);
}

function removeContact(element) {
  element.addEventListener("click", (event) => {
    event.target.parentNode.remove();
  });
}
