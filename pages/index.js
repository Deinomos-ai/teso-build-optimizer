import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [characterClass, setCharacterClass] = useState("");
  const [role, setRole] = useState("");
  const [build, setBuild] = useState(null);
  const [characterData, setCharacterData] = useState(null);

  const fetchBuild = async () => {
    const response = await fetch(`/api/getBuild?class=${characterClass}&role=${role}`);
    const data = await response.json();
    setBuild(data);
  };

  const fetchCharacterData = async () => {
    const response = await fetch(`/api/getCharacterData?class=${characterClass}`);
    const data = await response.json();
    setCharacterData(data);
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">Optimiseur de Build TESO</h1>
      <Input
        placeholder="Entrez votre classe (ex: Sorcier)"
        value={characterClass}
        onChange={(e) => setCharacterClass(e.target.value)}
        className="mb-2"
      />
      <Input
        placeholder="Entrez votre rôle (Tank, Soigneur, DPS)"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="mb-4"
      />
      <Button onClick={fetchBuild}>Obtenir un Build Optimisé</Button>
      <Button onClick={fetchCharacterData} className="mt-2">Analyser les Données du Personnage</Button>
      {build && (
        <div className="mt-6 p-4 border rounded-lg">
          <h2 className="text-xl font-semibold">Build Recommandé</h2>
          <p>Classe : {build.class}</p>
          <p>Rôle : {build.role}</p>
          <p>Compétences : {build.skills.join(", ")}</p>
          <p>Équipement : {build.gear.join(", ")}</p>
        </div>
      )}
      {characterData && (
        <div className="mt-6 p-4 border rounded-lg">
          <h2 className="text-xl font-semibold">Analyse du Personnage</h2>
          <p>Niveau : {characterData.level}</p>
          <p>XP : {characterData.experience}</p>
          <p>Statistiques : {characterData.stats.join(", ")}</p>
        </div>
      )}
    </div>
  );
}
