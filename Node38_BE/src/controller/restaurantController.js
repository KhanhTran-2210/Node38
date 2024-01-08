import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const conn = initModels(sequelize);
const getListRestaurant = async (req, res) => {
  try {
    let data = await conn.restaurant.findAll({
      include: ["like_res"],
    });
    res.send(data);
  } catch (error) {
    res.send(`BE error: ${error}`);
  }
};
const getLikeOnRes = async (req, res) => {
  try {
    let resId = req.params.resId;

    const likes = await conn.like_res.findAll({
      where: { res_id: resId },
    });
    res.send(likes);
  } catch (error) {
    res.send(`Error: ${error}`);
  }
};

const getRateOnRes = async (req, res) => {
  try {
    let resId = req.params.resId;

    const rates = await conn.rate_res.findAll({
      where: { res_id: resId },
    });
    res.send(rates);
  } catch (error) {
    res.send(`BE error: ${error}`);
  }
};

export { getListRestaurant, getLikeOnRes, getRateOnRes };
