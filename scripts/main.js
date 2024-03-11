function removeContact(element) {
  element.addEventListener("click", (event) => {

    event.target.parentNode.remove();

    const allLi = document.querySelectorAll("li")

    const contactCount = document.querySelector(".contact-count");
    
    contactCount.textContent = `(${allLi.length} Contacts)`

    submitButton.reset()
  });
}

function contactTemplate(name, telephone, email, notes, related) {
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
        const strong = document.createElement("strong");
        strong.textContent = "Notes: ";
      li.append(document.createElement("br"), strong, notes);
    }

    if (related) {
      const strong = document.createElement("strong");
      strong.textContent = "Relationship: ";
    li.append(document.createElement("br"), strong, related);
  }

    const button = document.createElement("button")

    button.innerText = "Delete"

    li.append(button)

    return li;
  }
  
  function generateContact(name, telephone, email, notes, related) {
    const li = contactTemplate(name, telephone, email, notes, related);
  
    const ul = document.querySelector("ul");

    const deleteButton = li.querySelector("button");

    removeContact(deleteButton)

    ul.append(li);
  }

const submitButton = document.querySelector("form");

submitButton.addEventListener("submit", (event) => {
    
    event.preventDefault();

    const name = event.target.name.value;

    const telephone = event.target.phone.value;

    const email = event.target.email.value;

    const notes = event.target.notes.value;

    const relationships = event.target.relationship;

    let checkedRelationship = "";

    let related = "";
  
    for (let relationship of relationships) {
      if (relationship.checked) {
        checkedRelationship = relationship.value
        if(checkedRelationship === "on") {
          related = relationship.id
        }
      }
    }

    generateContact(name, telephone, email, notes, related);

    const allLi = document.querySelectorAll("li")

    const contactCount = document.querySelector(".contact-count");
    
    contactCount.textContent = `(${allLi.length} Contacts)`
    
    submitButton.reset()
    
})
