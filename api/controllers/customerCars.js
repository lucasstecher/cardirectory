const uuidv4 = require('uuid/v4');

module.exports = app => {
    const customerCarsDB = app.data.customerCars;
    const controller = {};

    const {
        customerCars: customerCarsMock,
    } = customerCarsDB;

    controller.listCars = (req, res) => res.status(200).json(customerCarsDB);

    controller.saveCars = (req, res) => {
        customerCarsMock.data.push({
            id: uuidv4(),
            modelo: req.body.modelo,
            marca: req.body.marca,
            cor: req.body.cor,
            ano: req.body.ano,
            motor: req.body.motor,
            foto: req.body.foto,
        });

        res.status(201).json(customerCarsMock);
    }

    return controller;
}