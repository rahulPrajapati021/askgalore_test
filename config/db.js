import { Sequelize } from "sequelize";
const seq = new Sequelize({
    username: "postgres",
    password: "123456",
    dialect: "postgres",
    host: "localhost",
    port: 5432,
    database:"machine_test"
});

export async function connectDatabase() {
  await seq
    .authenticate()
    .then(() => {
        console.log("Database connection successful");
    })
    .catch((err) => console.log(`Database connection failed ${err}`));
}
export default seq;
