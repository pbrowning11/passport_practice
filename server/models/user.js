
import bCrypt from"bcrypt-nodejs";

const userModel = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  User.prototype.validPassword = function(password) {
    console.log("comparing password")
    // console.log(password)
    // console.log("=========")
    // console.log(this)
    return bCrypt.compareSync(password, this.password)
  }
  User.hook("beforeCreate", function(user) {
    user.password = bCrypt.hashSync(user.password, bCrypt.genSaltSync(10), null)
  })
  return User;
};

export default userModel