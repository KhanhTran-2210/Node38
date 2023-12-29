import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _like_res from  "./like_res.js";
import _rate_res from  "./rate_res.js";
import _restaurant from  "./restaurant.js";
import _users from  "./users.js";

export default function initModels(sequelize) {
  const like_res = _like_res.init(sequelize, DataTypes);
  const rate_res = _rate_res.init(sequelize, DataTypes);
  const restaurant = _restaurant.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);

  like_res.belongsTo(restaurant, { as: "re", foreignKey: "res_id"});
  restaurant.hasMany(like_res, { as: "like_res", foreignKey: "res_id"});
  rate_res.belongsTo(restaurant, { as: "re", foreignKey: "res_id"});
  restaurant.hasMany(rate_res, { as: "rate_res", foreignKey: "res_id"});
  like_res.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(like_res, { as: "like_res", foreignKey: "user_id"});
  rate_res.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(rate_res, { as: "rate_res", foreignKey: "user_id"});

  return {
    like_res,
    rate_res,
    restaurant,
    users,
  };
}
