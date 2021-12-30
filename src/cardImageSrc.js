export const SUIT = {
  DIAMOND: "Diamond",
  CLUBS: "Clubs",
  SPADES: "Spades",
  HEARTS: "Hearts",
};

// Importing the images for parcel to process and exporting for use
export const cardImageSources = {
  back: new URL(
    "../assets/cardsPack/PNG/Large/Back Red 1.png",
    import.meta.url
  ),
  [SUIT.CLUBS]: {
    1: new URL("../assets/cardsPack/PNG/Large/Clubs 1.png", import.meta.url),
    2: new URL("../assets/cardsPack/PNG/Large/Clubs 2.png", import.meta.url),
    3: new URL("../assets/cardsPack/PNG/Large/Clubs 3.png", import.meta.url),
    4: new URL("../assets/cardsPack/PNG/Large/Clubs 4.png", import.meta.url),
    5: new URL("../assets/cardsPack/PNG/Large/Clubs 5.png", import.meta.url),
    6: new URL("../assets/cardsPack/PNG/large/Clubs 6.png", import.meta.url),
    7: new URL("../assets/cardsPack/PNG/large/Clubs 7.png", import.meta.url),
    8: new URL("../assets/cardsPack/PNG/large/Clubs 8.png", import.meta.url),
    9: new URL("../assets/cardsPack/PNG/large/Clubs 9.png", import.meta.url),
    10: new URL("../assets/cardsPack/PNG/Large/Clubs 10.png", import.meta.url),
    11: new URL("../assets/cardsPack/PNG/Large/Clubs 11.png", import.meta.url),
    12: new URL("../assets/cardsPack/PNG/Large/Clubs 12.png", import.meta.url),
    13: new URL("../assets/cardsPack/PNG/Large/Clubs 13.png", import.meta.url),
  },
  [SUIT.SPADES]: {
    1: new URL("../assets/cardsPack/PNG/Large/Spades 1.png", import.meta.url),
    2: new URL("../assets/cardsPack/PNG/Large/Spades 2.png", import.meta.url),
    3: new URL("../assets/cardsPack/PNG/Large/Spades 3.png", import.meta.url),
    4: new URL("../assets/cardsPack/PNG/Large/Spades 4.png", import.meta.url),
    5: new URL("../assets/cardsPack/PNG/Large/Spades 5.png", import.meta.url),
    6: new URL("../assets/cardsPack/PNG/Large/Spades 6.png", import.meta.url),
    7: new URL("../assets/cardsPack/PNG/Large/Spades 7.png", import.meta.url),
    8: new URL("../assets/cardsPack/PNG/Large/Spades 8.png", import.meta.url),
    9: new URL("../assets/cardsPack/PNG/Large/Spades 9.png", import.meta.url),
    10: new URL("../assets/cardsPack/PNG/Large/Spades 10.png", import.meta.url),
    11: new URL("../assets/cardsPack/PNG/Large/Spades 11.png", import.meta.url),
    12: new URL("../assets/cardsPack/PNG/Large/Spades 12.png", import.meta.url),
    13: new URL("../assets/cardsPack/PNG/Large/Spades 13.png", import.meta.url),
  },
  [SUIT.HEARTS]: {
    1: new URL("../assets/cardsPack/PNG/Large/Hearts 1.png", import.meta.url),
    2: new URL("../assets/cardsPack/PNG/Large/Hearts 2.png", import.meta.url),
    3: new URL("../assets/cardsPack/PNG/Large/Hearts 3.png", import.meta.url),
    4: new URL("../assets/cardsPack/PNG/Large/Hearts 4.png", import.meta.url),
    5: new URL("../assets/cardsPack/PNG/Large/Hearts 5.png", import.meta.url),
    6: new URL("../assets/cardsPack/PNG/Large/Hearts 6.png", import.meta.url),
    7: new URL("../assets/cardsPack/PNG/Large/Hearts 7.png", import.meta.url),
    8: new URL("../assets/cardsPack/PNG/Large/Hearts 8.png", import.meta.url),
    9: new URL("../assets/cardsPack/PNG/Large/Hearts 9.png", import.meta.url),
    10: new URL("../assets/cardsPack/PNG/Large/Hearts 10.png", import.meta.url),
    11: new URL("../assets/cardsPack/PNG/Large/Hearts 11.png", import.meta.url),
    12: new URL("../assets/cardsPack/PNG/Large/Hearts 12.png", import.meta.url),
    13: new URL("../assets/cardsPack/PNG/Large/Hearts 13.png", import.meta.url),
  },
  [SUIT.DIAMOND]: {
    1: new URL("../assets/cardsPack/PNG/Large/Diamond 1.png", import.meta.url),
    2: new URL("../assets/cardsPack/PNG/Large/Diamond 2.png", import.meta.url),
    3: new URL("../assets/cardsPack/PNG/Large/Diamond 3.png", import.meta.url),
    4: new URL("../assets/cardsPack/PNG/Large/Diamond 4.png", import.meta.url),
    5: new URL("../assets/cardsPack/PNG/Large/Diamond 5.png", import.meta.url),
    6: new URL("../assets/cardsPack/PNG/Large/Diamond 6.png", import.meta.url),
    7: new URL("../assets/cardsPack/PNG/Large/Diamond 7.png", import.meta.url),
    8: new URL("../assets/cardsPack/PNG/Large/Diamond 8.png", import.meta.url),
    9: new URL("../assets/cardsPack/PNG/Large/Diamond 9.png", import.meta.url),
    10: new URL(
      "../assets/cardsPack/PNG/Large/Diamond 10.png",
      import.meta.url
    ),
    11: new URL(
      "../assets/cardsPack/PNG/Large/Diamond 11.png",
      import.meta.url
    ),
    12: new URL(
      "../assets/cardsPack/PNG/Large/Diamond 12.png",
      import.meta.url
    ),
    13: new URL(
      "../assets/cardsPack/PNG/Large/Diamond 13.png",
      import.meta.url
    ),
  },
};
