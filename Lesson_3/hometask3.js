const axios = require("axios");

class Users {
  constructor(number) {
    this.number = number;
    this.url = "https://randomuser.me/api/";
  }

  async getUsers() {
    const responseFromUrl = await axios(`${this.url}?results=${this.number}`);
    const dataFromUrl = responseFromUrl.data.results;

    dataFromUrl.forEach((element) => {
      const person = {};
      person["Full Name"] =
        element.name.title + " " + element.name.first + " " + element.name.last;
      person.email = element.email;
      console.table(person);
    });
  }
}

const users = new Users(10);
users.getUsers();
