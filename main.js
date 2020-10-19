// Your code below.

const makeDino = function(species, period, carnivore, extinct) {
  const dino = {
    species: species,
    period: period,
    carnivore: carnivore,
    extinct: false,
  }
  if (extinct === true) {
    dino.extinct = true
  } else if(!extinct) {
    dino.extinct = false
  }
  return dino
}

const makeExtinct = function(dino) {
  const extinctDino = makeDino(dino.species, dino.period, dino.carnivore)
  extinctDino.extinct = dino.extinct
  if (extinctDino.extinct === false) {
    extinctDino.extinct = true
  }
  return extinctDino
}

const truncateSpecies = function(dino) {
  const dinoDots = {}
  dinoDots.period = dino.period
  dinoDots.carnivore = dino.carnivore
  dinoDots.extinct = dino.extinct
  if (dino.species.length > 7) {
      dinoDots.species = dino.species.slice(0, 7) + '...'
  } else {
      dinoDots.species = dino.species
  }
  return dinoDots
}

const makeSingular = function(dino) {
  const cutOff = {}
  cutOff.period = dino.period
  cutOff.carnivore = dino.carnivore
  cutOff.extinct = dino.extinct
  if (dino.species.endsWith('us')) {
      cutOff.species = dino.species.slice(0, -2)
  } else {
      cutOff.species = dino.species
  }
  return cutOff
}



// Our code below; DO NOT TOUCH!
if (typeof makeDino === 'undefined') {
  makeDino = undefined;
}

if (typeof makeExtinct === 'undefined') {
  makeExtinct = undefined;
}

if (typeof truncateSpecies === 'undefined') {
  truncateSpecies = undefined;
}

if (typeof makeSingular === 'undefined') {
  makeSingular = undefined;
}


module.exports = {
  makeDino,
  makeExtinct,
  truncateSpecies,
  makeSingular,
}
