export class List {
  constructor(list = []) {
    this.list = list;
  }

  compare(otherList) {
    const listOne = this.list.join(','), listTwo = otherList.list.join(',');
    let oneInTwo = false, twoInOne = false;
    
    if (listOne.includes(listTwo)) twoInOne = true;
    if (listTwo.includes(listOne)) oneInTwo = true;
    
    if (oneInTwo && twoInOne) return 'EQUAL';
    if (oneInTwo) return 'SUBLIST';
    if (twoInOne) return 'SUPERLIST';
    return 'UNEQUAL';
  }
}
