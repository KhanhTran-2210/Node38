import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const conn = initModels(sequelize);

const getVideo = async (req, res) => {
  try {
    let data = await conn.video.findAll({
      include: ["video_likes", "video_comments"],
    });
    res.send(data);
  } catch (error) {
    res.send(`BE error: ${error}`);
  }
};
const createVideo = async (req, res) => {
  try {
    let { video_name, thumbnail, description, user_id, type_id } = req.body;
    let newData = {
      video_name,
      thumbnail,
      description,
      user_id,
      type_id,
    };

    await conn.video.create(newData);
    res.send("Create video successful");
  } catch (error) {
    res.send(`BE error: ${error}`);
  }
};

const deleteVideo = async (req, res) => {
  try {
    let { videoId } = req.params;
    await conn.video.destroy({
      where: {
        video_id: videoId,
      },
    });
    res.send("Delete video successfull!");
  } catch (error) {
    res.send(`BE error: ${error}`);
  }
};
export { getVideo, createVideo, deleteVideo };
