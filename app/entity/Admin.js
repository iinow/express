const { Model, DataTypes } = require('sequelize')
const { sequel } = require('~/app/config/db/sequelize-handler')

class Admin extends Model {
    get id() {
        return this.getDataValue('idx')
    }

    set id(idx){
        this.setDataValue('idx', idx)
    }

    get fullName() {
        return this.getDataValue('name')
    }

    // set fullName(name) {
    //     // this.setDataValue('name', "시밢..")
    //     this.setAttributes('name', name)
    //     this.set('name', name)
    // }

    get desc() {
        return this.getDataValue('description')
    }

    // set desc(description) {
    //     // this.setDataValue('description', "지ㅔ발")
    //     this.setAttributes('description', description)
    //     this.set('description', description)
    // }
}

Admin.init({
    idx: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        set(name) {
            this.defaultValue = name
            console.log('dd')
            this.setDataValue('name', name)
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        set(description) {
            this.defaultValue = description
            console.log('dd')
            this.setDataValue('description', description)
        }
    }
}, {
    sequelize: sequel,
    modelName: 'admin',
    timestamps: true
})

module.exports = Admin