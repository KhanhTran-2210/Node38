import { Sequelize } from "sequelize";

const sequelize = new Sequelize("node38_youtube", "root", "1234", {
  host: "localhost",
  port: 3307,
  dialect: "mysql",
});
// try {
//   await sequelize.authenticate(); //xác mình connect tới db thành công chưa
//   console.log("Pass");
// } catch (error) {
//   console.log("Fail");
// }

export default sequelize;
