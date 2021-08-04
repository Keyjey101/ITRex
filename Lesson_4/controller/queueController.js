const { queue, visited } = require("../store");

class queueController {
  async getQueue(req, res, next) {
    try {
      let currentDiagnose = null;
      if (req.query.patient) {
        const findedPatient = visited.filter(
          (x) => x.name === req.query.patient
        );
        currentDiagnose = findedPatient.length === 1 ? findedPatient[0] : null;
      }    
      return res.render("queue", {
        currentPatient: queue[queue.length - 1],
        currentDiagnose: currentDiagnose,
      });
    } catch (e) {
      console.log(e);
    }
  }
  async postQueue(req, res, next) {
    try {
      queue.unshift({ name: req.body.newPatient });
      return res.render("queue", {
        currentPatient: queue[queue.length - 1],
        currentDiagnose: null,
      });
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new queueController();
