let { queue, visited } = require("../store");

class doctorController {
  async getDoctor(req, res, next) {
    try {
      let currentDiagnose = null;
      if (req.query.patient) {
        const findedPatient = visited.filter(
          (x) => x.name === req.query.patient
        );
        currentDiagnose = findedPatient.length === 1 ? findedPatient[0] : null;
      }
      return res.render("doctor", {
        currentPatient: queue[queue.length - 1],
        currentDiagnose: currentDiagnose,
      });
    } catch (e) {
      console.log(e);
    }
  }
  async postResolution(req, res, next) {
    try {
      const visitedPatient = queue.pop();
      const patient = {
        name: visitedPatient.name,
        diagnose: req.body.resolution,
      };
      visited.push(patient);    
      return res.render("doctor", {
        currentPatient: queue[queue.length - 1],
        currentDiagnose: null,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async deleteResolution(req, res, next) {
    try {    
      visited = visited.filter((x) => x.name !== req.body.patient);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new doctorController();
