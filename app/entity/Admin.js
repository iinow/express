const { Model, DataTypes } = require('sequelize')
const { sequel } = require('~/app/config/db/sequelize-handler')

class Admin extends Model {
    get id() {
        this.idx
    }

    get fullName() {
        this.name
    }

    get desc() {
        this.description
    }
}

Admin.init({
    idx: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }
}, {
    sequelize: sequel,
    modelName: 'admin',
    timestamps: true
})

module.exports = Admin