class Allergies {
  constructor(score) {
    this.items = [];
        
    while (score>= 128) {
      score -= 128;
      if (!this.allergicTo('cats')) this.items.unshift('cats');
    }
    
    while (score >= 64) {
      score -= 64;
      if (!this.allergicTo('pollen')) this.items.unshift('pollen');
    }
    
    while (score >= 32) {
      score -= 32;
      if (!this.allergicTo('chocolate')) this.items.unshift('chocolate');
    }
    
    while (score >= 16) {
      score -= 16;
      if (!this.allergicTo('tomatoes')) this.items.unshift('tomatoes');
    }
    
    while (score >= 8) {
      score -= 8;
      if (!this.allergicTo('strawberries')) this.items.unshift('strawberries');
    }
    
    while (score >= 4) {
      score -= 4;
      if (!this.allergicTo('shellfish')) this.items.unshift('shellfish');
    }
    
    while (score >= 2) {
      score -= 2;
      if (!this.allergicTo('peanuts')) this.items.unshift('peanuts');
    }
    
    while (score >= 1) {
      score -= 1;
      if (!this.allergicTo('eggs')) this.items.unshift('eggs');
    }
  }

  list() {
    return this.items;
  }

  allergicTo(item) {
    return this.items.includes(item);
  }
}