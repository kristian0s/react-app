export type MoviesType = {
  id: number;
  name: string;
  genre: string[];
  runtime: string;
  image: string;
};

export const movies: MoviesType[] = [
  {
    id: 1,
    name: "The stranger",
    genre: ["Crime", "Drama", "Mystery", "Thriller"],
    runtime: "117 min",
    image:
      "https://m.media-amazon.com/images/M/MV5BYzhmNWMyYjQtNTVlMC00MGUwLWFmYjEtM2NkNWY0ODQ2YmFiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
  },
  {
    id: 2,
    name: "Heat",
    genre: ["Crime", "Drama"],
    runtime: "170 min",
    image:
      "https://resizing.flixster.com/JvvCXACkbTgmxNHSkUF-1d1Dnrw=/206x305/v2/https://flxt.tmsimg.com/assets/p17455_p_v8_ae.jpg",
  },
  {
    id: 3,
    name: "Prisoners",
    genre: ["Crime", "Mystery", "Thriller"],
    runtime: "153 min",
    image:
      "https://resizing.flixster.com/3knKIrntGiFhdjVo8N4ZXw24bnQ=/206x305/v2/https://flxt.tmsimg.com/assets/p9872448_p_v8_ab.jpg",
  },
  {
    id: 4,
    name: "American Hustle",
    genre: ["Crime", "Drama"],
    runtime: "138 min",
    image:
      "https://m.media-amazon.com/images/M/MV5BMmM4YzJjZGMtNjQxMy00NjdlLWJjYTItZWZkYzdhOTdhNzFiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 5,
    name: "Murder Mystery 2",
    genre: ["Crime", "Action", "Mystery", "Thriller", "Comedy"],
    runtime: "90 min",
    image:
      "https://m.media-amazon.com/images/M/MV5BMzkyMjU1ZjMtMDJlMS00M2YzLWJhZDQtYjFjZTUyMzI2MDViXkEyXkFqcGdeQXVyMzQyMDgzOTU@._V1_.jpg",
  },
  {
    id: 6,
    name: "The hatchet wielding hitchhiker",
    genre: ["Crime", "Documentary"],
    runtime: "85 min",
    image:
      "https://m.media-amazon.com/images/M/MV5BYzI1OGUyYzctMTMwMC00MDM1LWIzMGEtOWE3ZjYxYjY3MGJlXkEyXkFqcGdeQXVyMTUzNzc3NDAz._V1_.jpg",
  },
  {
    id: 7,
    name: "Capturing the killer nurse",
    genre: ["Crime", "Documentary"],
    runtime: "94 min",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Capturing_the_Killer_Nurse.jpg/220px-Capturing_the_Killer_Nurse.jpg",
  },
  {
    id: 8,
    name: "The takeover",
    genre: ["Crime", "Action", "Drama"],
    runtime: "87 min",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDE4ZTExZmMtYzA4NS00YzQwLTllMzgtNjQ0MDBjYTc3MzQxXkEyXkFqcGdeQXVyMTM0NTc2NDgw._V1_FMjpg_UX1000_.jpg",
  },
];
