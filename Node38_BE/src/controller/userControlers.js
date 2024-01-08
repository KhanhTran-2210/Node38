import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

// initModels => User, Customer, Order,...

const conn = initModels(sequelize);
const getUser = async (req, res) => {
  try {
    let data = await conn.users.findAll();
    res.send(data);
  } catch (error) {
    console.log(`Back end error: ${error}`);
  }
};

const createLikeRestaurant = async (req, res) => {
  try {
    let { user_id, res_id, date_like } = req.body;

    let newLike = {
      user_id,
      res_id,
      date_like,
    };
    await conn.like_res.create(newLike);
    res.send(newLike);
  } catch (error) {
    res.send(`Error: ${error}`);
  }
};

const unLikeRestaurant = async (req, res) => {
  try {
    let { likeId } = req.params;
    await conn.like_res.destroy({
      where: {
        like_id: likeId,
      },
    });
    res.send("Delete successful");
  } catch (error) {
    res.send(`Error: ${error}`);
  }
};

const getLikeOnUser = async (req, res) => {
  try {
    let userId = req.params.userId;

    const likes = await conn.like_res.findAll({
      where: { user_id: userId },
    });
    res.send(likes);
  } catch (error) {
    res.send(`Error: ${error}`);
  }
};
const addRate = async (req, res) => {
  try {
    let { userId, resId, amount, dateRate } = req.body;
    let newRate = {
      user_id: userId,
      res_id: resId,
      amount,
      date_rate: dateRate,
    };
    await conn.rate_res.create(newRate);
    res.send(newRate);
  } catch (error) {
    res.send(`BE error: ${error}`);
  }
};

const getRateOnUser = async (req, res) => {
  try {
    let userId = req.params.userId;

    const rates = await conn.rate_res.findAll({
      where: { user_id: userId },
    });
    res.send(rates);
  } catch (error) {
    res.send(`BE error: ${error}`);
  }
};

const createOrder = async (req, res) => {
  try {
    let { code, arrSubId, userId, resId, amount, dateOrder } = req.body;
    let newOrder = {
      code,
      arr_sub_id: arrSubId,
      user_id: userId,
      res_id: resId,
      amount,
      date_order: dateOrder,
    };
    await conn.orders.create(newOrder);
    res.send(newOrder);
  } catch (error) {
    res.send(`BE error: ${error}`);
  }
};
export {
  getUser,
  createLikeRestaurant,
  unLikeRestaurant,
  getLikeOnUser,
  addRate,
  getRateOnUser,
  createOrder,
};
