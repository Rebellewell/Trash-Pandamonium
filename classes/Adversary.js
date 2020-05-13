import Creature from './Creature';

export default class Adversary extends Creature {
  constructor(location) {
    super(location);
    this.img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDq11lBMHkK68Wxo--pY2yLda48o2ogkJNFHSOhI3t4nA88D9q&s';
  }
}