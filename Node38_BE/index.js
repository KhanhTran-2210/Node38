//B1: npm init <--> yarn init <--> khởi tạo source BE
//B2: cài express
// npm i express <---> yarn add express
//B3: thêm type module bên trong file package.json --> ES6
//LƯU Ý 3 ĐƯỢC ĐẦU CHỈ DUNG 1 LẦN DUY NHẤT, DÙNG 2 LẦN SẼ RA LỖI

//B4: import thư viện express
import express from "express";
import rootRoutes from "./src/routes/rootRouter.js";
//B5: tạo biến app để start BE
const app = express();
//add middle ware để express hiểu body nhận về object (json)
app.use(express.json());
app.use(rootRoutes);
//B6: setup port cho BE => 8080
app.listen("8080", () => {
  console.log("BE is starting");
});

// Viết API siêu đơn giản
// tạo api GET
// app.get("/get-video", (req, res) => {
//   res.send("Get video");
// });

app.post("/create-video", (req, res) => {
  res.send("Create video");
});

// GET video có id là 5, userId=10 và dùng params
app.get("/get-video/:videoId/:userId", (req, res) => {
  let { videoId, userId } = req.params;
  let { token } = req.headers;
  res.send(`get video with id ${videoId}, ${userId}, ${token}`);
});

//GET video có id là 5, userId=10 và dùng query
app.get("/get-video-detail", (req, res) => {
  let { id, userId } = req.query;
  res.send(`get video with id ${id}, ${userId}`);
});
// lưu ý là method GET, DELETE kh có body
// POST, PUT có body
// get data từ body
app.post("/get-body", (req, res) => {
  let { hoTen, email } = req.body;
  res.send(`Get body: ${hoTen} and ${email}`);
});
// để connect tới database -> biết chuỗi kết nối của database
// chuỗi kết nối database
// host: (localhost: 127.0.0.1)
// username: root
// password: 1234
// port: 3306(docker: 3307, ...)
// tên database - optional

// *** Khi kết nối tới CSDL hay hệ thống khác thì mình phải dùng cơ chế bất đồng bộ - (async-await)
// Kết quả trả về -> promise(lời hứa) -> resolve(thành công) hoặc reject(lỗi)
// kết quả trả về của mysql2 -> [data, thành phần của table]

import mysql from "mysql2";

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  port: 3307,
  database: "node38_SQL_B2",
});
app.get("/get-list-user", async (req, res) => {
  let query = "SELECT * FROM users"; // tạo câu query để tương tác với database
  try {
    let data = await conn.promise().query(query);
    // data = [data trả về từ database, thành phần cấu tạo nên table đó]
    res.send(data[0]);
  } catch (error) {
    res.send(`error: ${error}`);
  }
});
