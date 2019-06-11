// Soldier
class Soldier {
  constructor(healthArg,strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
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
  constructor(name,health,strength) {
    super(name,health,strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health >0) return `${this.name} has received ${damage} points of damage`;
    else return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return ("Odin Owns You All!");
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health,strength) {
    super(health,strength);
  }

  receiveDamage (damage) {
    this.health -= damage;
    if (this.health >0) return `A Saxon has received ${damage} points of damage`;
    else return `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor()  {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    console.log(saxon)
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let numberOfSaxons = this.saxonArmy.length;
    let numberOfVikings = this.vikingArmy.length;
    let attackedSaxon = Math.floor(Math.random()*numberOfSaxons);
    let attackingViking = Math.floor(Math.random()*numberOfVikings);

    console.log(attackedSaxon,this.saxonArmy[attackedSaxon]);
    console.log(attackingViking,this.vikingArmy[attackingViking]);
console.log(this.saxonArmy[attackedSaxon]);
    this.saxonArmy[attackedSaxon].receiveDamage(this.vikingArmy[attackingViking].strength);
  }

  saxonAttack() {

  }

  showStatus() {
    if (this.saxonArmy.length === 0) return `Vikings have won the war of the century!`;
    if (this.vikingArmy.length === 0) return `Saxons have fought for their lives and survive another day...`;
    if (this.saxonArmy.length > 0 && this.saxonArmy.length > 0) return `Vickings and Saxons are still in the thick of the battle.`;
  }
}


totalWar = new War();
totalWar.addViking("Harald",300,50);
totalWar.addViking("Thor",300,50);
totalWar.addViking("Valhala",300,50);
totalWar.addSaxon(300,50);
totalWar.addSaxon(300,50);
totalWar.addSaxon(300,50);

totalWar.vikingAttack();







