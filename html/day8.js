const users = [];
function User(name, age) {
  return {
    name,
    age,
    intro: function () {
      alert(`hi i am ${this.name}. i am ${this.age} years old `);
    },
  };
}
function formatUser(index, users) {
  return `
  <li>
    ${index + 1}.${users.name}
    <ul>
      <li>Age: ${users.age}</li>
      <li>
        <button onclick="intro(${users.intro})"> say hi</button>
      </li>
    </ul>
  </li>;`;
}

function createUser() {
  const nameElement = document.getElementById("name");
  const ageElement = document.getElementById("age");

  const user = User(nameElement.value, ageElement.value);
  if (nameElement.value == "" || ageElement.value == "") {
    return;
  }
  users.push(user);
  nameElement.value = "";
  ageElement.value = "";
  document.getElementById("user-list").innerHTML = users.map((user, index) =>
    formatUser(index, user)
  );
}
