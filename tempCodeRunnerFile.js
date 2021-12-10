rank = [3, 4, 5, 6, 7];
  let handCombos= {};
  for (let i = 0; i < rank.length - 1; i += 0) {
    if (rank[i + 1] - rank[i] == 1) {
      handCombos.straights = true;
      console.log("handcombo", handCombos.straights);
    } else {
      handCombos.straights = false;
    }
  }