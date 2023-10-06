let equipos = [
  {
    id: 0,
    miembros: ["Gustavo", "Juan S", "Juan F"],
    categorias: ["Duelo"]
  },
  {
    id: 1,
    miembros: ["unknow", "unknow"],
    categorias: ["unknow"]
  }
];

class EquiposController {
  getAll() {
    return JSON.stringify(equipos);
  }
  crear(miembros, categorias) {
    const id = equipos.length;
    const equipo = {
      id,
      miembros,
      categorias,
    };
    equipos.push(equipo);
    return equipo;
  }
};


module.exports = new EquiposController();