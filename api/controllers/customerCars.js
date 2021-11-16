const uuidv4 = require('uuid/v4');

module.exports = app => {
    const customerCarsDB = app.data.customerCars;
    const controller = {};

    const {
        customerCars: customerCarsMock,
    } = customerCarsDB;

    controller.listCars = (req, res) => res.status(200).json(customerCarsDB);

    controller.saveCar = (req, res) => {
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

    controller.removeCar = (req, res) => {
    const { 
        carId,
    } = req.params;

    const foundCarIndex = customerCarsMock.data.findIndex(customer => customer.id === carId);

    if (foundCarIndex === -1) {
        res.status(404).json({
            message: 'Carro não encontrado na base.',
            success: false,
            customerCars: customerCarsMock,
        });
    } else {
        customerCarsMock.data.splice(foundCarIndex, 1);
        res.status(200).json({
            message: 'Carro encontrado e deletado com sucesso!',
            success: true,
            customerCars: customerCarsMock,
        });
    }
};
    controller.updateCar = (req, res) => {
        const {
            carId
        } = req.params;

        const foundCarIndex = customerCarsMock.data.findIndex(customer => customer.id === carId);

        if (foundCarIndex === -1) {
            res.status(404).json({
                message: 'Carro não encontrado na base.',
                success: false,
                customerCar: customerCarsMock,
            });
        } else {
            const newCar = {
                id: carId,
                modelo: req.body.modelo,
                marca: req.body.marca,
                cor: req.body.cor,
                ano: req.body.ano,
                motor: req.body.motor,
                foto: req.body.foto,
                createdAt: new Date()
            };

            customerCarsMock.data.splice(foundCarIndex, 1, newCar);

            res.status(200).json({
                message: 'Carro encontrado e atualizado com sucesso!',
                success: true,
                customerCars: customerCarsMock,
        });
    }
}

return controller;
}