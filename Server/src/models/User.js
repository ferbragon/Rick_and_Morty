const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
      },
      email: {
         type: DataTypes.STRING,
         isEmail: true,
         allowNull: false,
         validate: {
            validateEmail(email){
               const regexEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
               if (email.length > 35) {
                  throw new Error("The email must be under 35 characters");
                };
                if (!regexEmailValid.test(email)) {
                  throw new Error("Enter a valid email");
                };
            }
         }
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            validatePassword(password){
               const regexPassword = /.*\d+.*/;
               if (password.length < 6 || password.length > 10 ){
                  throw new Error("Password between 6 and 10 characters");
                };
                if (!regexPassword.test(password)) {
                  throw new Error("The password must have une number");
                };
            }
         }
      }
   }, { timestamps: false });
};
