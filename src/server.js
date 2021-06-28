import { Server, Model, Factory, Response } from "miragejs";
import frontbooks from "./data/frontbooks";
import users from "./data/users";
export function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    environment,

    models: {
      book: Model,
      frontbook: Model,
      user: Model,
    },

    factories: {
      frontbook: Factory.extend({
        name(i) {
          if (i >= frontbooks.length) {
            return frontbooks[i % frontbooks.length].name;
          }
          return frontbooks[i].name;
        },
        author(i) {
          if (i >= frontbooks.length) {
            return frontbooks[i % frontbooks.length].author;
          }
          return frontbooks[i].author;
        },
        imgUrl(i) {
          if (i >= frontbooks.length) {
            return frontbooks[i % frontbooks.length].imgUrl;
          }
          return frontbooks[i].imgUrl;
        },
        rating(i) {
          if (i >= frontbooks.length) {
            return frontbooks[i % frontbooks.length].rating;
          }
          return frontbooks[i].rating;
        },
        qtdReview(i) {
          if (i >= frontbooks.length) {
            return frontbooks[i % frontbooks.length].qtdReview;
          }
          return frontbooks[i].qtdReview;
        },
        price(i) {
          if (i >= frontbooks.length) {
            return frontbooks[i % frontbooks.length].price;
          }
          return frontbooks[i].price;
        },
        description(i) {
          if (i >= frontbooks.length) {
            return frontbooks[i % frontbooks.length].description;
          }
          return frontbooks[i].description;
        },
      }),
      user: Factory.extend({
        email(i) {
          if (i >= users.length) {
            return users[i % users.length].email;
          }
          return users[i].email;
        },
        password(i) {
          if (i >= users.length) {
            return users[i % users.length].password;
          }
          return users[i].password;
        },
        name(i) {
          if (i >= users.length) {
            return users[i % users.length].name;
          }
          return users[i].name;
        },
      }),
    },

    seeds(server) {
      server.createList("frontbook", 10);
      server.createList("user", 1);
    },

    routes() {
      this.namespace = "api";

      // Books endpoints

      this.get("frontbooks", function (schema) {
        let json = this.serialize(schema.frontbooks.all());
        return json.frontbooks;
      });

      this.get("book/:name", function (schema, request) {
        let name = request.params.name;
        let res_query = schema.frontbooks.findBy({ name });
        if (res_query !== null) {
          let json = this.serialize(res_query);
          return json.frontbook;
        }
        return [];
      });

      // User endpoints

      this.post("users", function (schema, request) {
        let data = JSON.parse(request.requestBody);

        return schema.users.create(data);
      });

      this.post("authenticate/", function (schema, request) {
        let data = JSON.parse(request.requestBody);
        const email = data.email || "";
        const password = data.password || "";

        let user = schema.users.findBy({ email, password });
        if (user == null) {
          return new Response(401);
        } else {
          let json = this.serialize(user);
          delete json.user["password"];
          delete json.user["id"];
          json["access_token"] = "dumbtoken";
          return new Response(200, {}, JSON.stringify(json));
        }
      });
    },
  });

  return server;
}
