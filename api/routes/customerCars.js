module.exports = app => {
    const controller = app.controllers.customerCars;

    app.route('/api/v1/cars')
        .get(controller.listCars)
        .post(controller.saveCar);
    
    app.route('/api/v1/customer-cars/:carId')
        .delete(controller.removeCar)
        .put(controller.updateCar)
}