//Definition of the data model for firebase
class Restaurant {
    constructor(id, name, desc, address, city, imagUrl){
        this.id = id,
        this.name = name,
        this.desc = desc,
        this.address = address,
        this.city = city,
        this.imagUrl = imagUrl
    }
}

module.exports = Restaurant;
