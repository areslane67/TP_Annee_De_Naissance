document.addEventListener("DOMContentLoaded", () => {
    let age, prenom, message, submit, date, warning, année;
    message = document.querySelector("div p");
    warning = document.querySelector("div");
    submit = document.getElementsByTagName("input")[2];
    date = new Date();

    class User {
        constructor(age, prenom) {
            this.age = document.getElementsByTagName("input")[0].value;
            this.prenom = document.getElementsByTagName("input")[1].value;
        }
        getOut() {
            console.log(age, prenom);
            return `${this.age} : ${this.prenom}`;
        }
        verif() {
            if (this.age && this.prenom) {
                année = date.getFullYear() - this.age;
                message.innerText = ` Bonjour ${this.prenom.toUpperCase()}, vous êtes né(e) en ${année} `;
                warning.classList.remove("warning");
                warning.classList.add("success");
            } else {
                message.innerText = ` Veuillez saisir les champs `;
                warning.classList.remove("success");
                warning.classList.add("warning");
            }
        }
    }
    submit.addEventListener("click", e => {
        e.preventDefault();
        let createUser = new User(age, prenom);
        createUser.verif();
    });
});