export default function handler(req, res) {
  const { class: characterClass, role } = req.query;

  // Simulation d'un build optimisé
  const build = {
    class: characterClass || "Inconnu",
    role: role || "DPS",
    skills: ["Compétence 1", "Compétence 2", "Compétence 3"],
    gear: ["Équipement A", "Équipement B", "Équipement C"]
  };

  res.status(200).json(build);
}
