const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");


router.get("/", (req, res) => res.send("This is root!"));


router.post("/airCompanies", controllers.createAirline);

router.get("/airCompanies", controllers.getAllAirline);

router.get("/airCompanies/:id", controllers.getAirlineById);

router.post("/airCompanies/:id", controllers.updateAirline);

router.delete("/airCompanies/:id", controllers.deleteAirline);


router.get("/homeCountries/:id/airCompanies", controllers.getArlinesByCountry)


router.post("/homeCountries", controllers.createHomeCountry);

router.get("/homeCountries", controllers.getAllHomeCountry);

router.get("/homeCountries/:id", controllers.getHomeCountryById);

router.post("/homeCountries/:id", controllers.updateHomeCountry);

router.delete("/homeCountries/:id", controllers.deleteHomeCountry);

module.exports = router;

