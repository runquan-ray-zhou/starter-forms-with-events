const form = document.querySelector("form");
const count = document.querySelector(".contact-count");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#name").value;
  const telephone = document.querySelector("#phone").value;
  const email = document.querySelector("#email").value;
  const notes = document.querySelector("#notes").value;
  const contactTypes = event.target["contact-type"];
  let type = "";
  for (let contactType of contactTypes) {
    if (contactType.checked) {
      type = contactType.value;
    }
  }

  generateContact(name, telephone, email, notes, type);
  let countIncrease = Number(count.innerText.split(" ")[0].slice(1));
  countIncrease++;
  count.innerText = `(${countIncrease} Contacts)`;
  form.reset();
});
