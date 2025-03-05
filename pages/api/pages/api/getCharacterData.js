export default function handler(req, res) {
  const { class: characterClass } = req.query;

  // Simulation de récupération des stats depuis ESO-Database
  const characterData = {
    level: 50,
    experience: 1200000,
    stats: ["Santé: 3000", "Magie: 2500", "Vigueur: 2700"]
  };

  res.status(200).json(characterData);
}
