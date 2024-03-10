const { sequelize } = require("./models/index.js");

const driver = () => {
  sequelize
    .sync()
    .then(() => {
      console.log("초기화 완료");
    })
    .catch((err) => {
      console.log("초기화 실패");
      console.log(err);
    });
};
driver();
