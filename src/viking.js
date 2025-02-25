// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }
    if (this.health <= 0) {
      return 'A Saxon has died in combat';
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    const totalVikings = this.vikingArmy.length;
    const totalSaxons = this.saxonArmy.length;
    let randomViking = math.floor(math.random() * totalVikings);
    let randomSaxon = math.floor(math.random() * totalSaxons);

    let vikingRand = this.vikingArmy[randomViking];
    let saxonRand = this.saxonArmy[randomSaxon];

    const saxonDamage = saxonRand.receiveDamage(vikingRand.strength);

    if (saxonRand.health <= 0) {
      this.saxonArmy.splice(randomSaxon, 1);
    }
    return saxonDamage;
  }
  saxonAttack() {
    const totalVikings = this.vikingArmy.length;
    const totalSaxons = this.saxonArmy.length;
    let randomViking = math.floor(math.random() * totalVikings);
    let randomSaxon = math.floor(math.random() * totalSaxons);

    let vikingRand = this.vikingArmy[randomViking];
    let saxonRand = this.saxonArmy[randomSaxon];

    const vikingDamage = vikingRand.receiveDamage(saxonRand.strength);

    if (vikingRand.health <= 0) {
      this.vikingArmy.splice(randomViking, 1);
    }
    return vikingDamage;
  }
  showStatus() {
    if (this.saxonArmy.length <= 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length <= 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}
