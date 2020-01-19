const path = require('path');
//const { sequelize, Sequelize } = require(path.join(__dirname, "index"))
const { sequelize, Sequelize } = require(path.join(__dirname, "../modules/sequelize-conn"));
// See the https://sequelize.org/master/identifiers
class User extends Sequelize.Model {}

// to Promise()
sequelize.authenticate().then(() => {
	User.init({
		username: {type: Sequelize.STRING},
		userid: {type: Sequelize.STRING},
		age: {type: Sequelize.INTEGER},
	}, {
		sequelize,
		modelName: "user"
	});
	User.sync({force: false});
});



// C:\Users\Administrator\Documents\node-es6\04.pug\modules
// http://127.0.0.1:3000
// Executing (default): SELECT 1+1 AS result
// Executing (default): DROP TABLE IF EXISTS `Users`;
// Executing (default): CREATE TABLE IF NOT EXISTS `Users` (`id` INTEGER NOT NULL auto_increment , `username` VARCHAR(255), `userid` VARCHAR(255), `age` INTEGER, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
// Executing (default): SHOW INDEX FROM `Users`


//module.exports = {User};
module.exports = User;