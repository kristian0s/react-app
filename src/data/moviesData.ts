export type MoviesType = {
  id: number;
  name: string;
  genre: "Crime" | "Drama" | "Mystery" | "Thriller";
  runtime: string;
  image: string;
};

export const movies = [
  {
    id: 1,
    name: "The stranger",
    genre: ["Crime", "Drama", "Mystery", "Thriller"],
    runtime: "117 min",
    image:
      "https://resizing.flixster.com/my9W88nituE2qhdLMIxWFJPdK7Y=/206x305/v2/https://resizing.flixster.com/q8zUtlUy8hfG49LYVHIvZQlNQJE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzM1MTA4MTk5LTFjMDYtNDZiOS1iN2RjLTI5NDU1NzI4YTFiOS5qcGc=",
  },
  {
    id: 2,
    name: "Heat",
    genre: ["Crime", "Drama"],
    runtime: "170 min",
    image:
      "https://resizing.flixster.com/my9W88nituE2qhdLMIxWFJPdK7Y=/206x305/v2/https://resizing.flixster.com/q8zUtlUy8hfG49LYVHIvZQlNQJE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzM1MTA4MTk5LTFjMDYtNDZiOS1iN2RjLTI5NDU1NzI4YTFiOS5qcGc=",
  },
  {
    id: 3,
    name: "Prisoners",
    genre: ["Crime", "Drama", "Mystery", "Thriller"],
    runtime: "153 min",
    image:
      "https://resizing.flixster.com/my9W88nituE2qhdLMIxWFJPdK7Y=/206x305/v2/https://resizing.flixster.com/q8zUtlUy8hfG49LYVHIvZQlNQJE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzM1MTA4MTk5LTFjMDYtNDZiOS1iN2RjLTI5NDU1NzI4YTFiOS5qcGc=",
  },
  {
    id: 4,
    name: "American Hustle",
    genre: ["Crime", "Drama"],
    runtime: "138 min",
    image:
      "https://resizing.flixster.com/my9W88nituE2qhdLMIxWFJPdK7Y=/206x305/v2/https://resizing.flixster.com/q8zUtlUy8hfG49LYVHIvZQlNQJE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzM1MTA4MTk5LTFjMDYtNDZiOS1iN2RjLTI5NDU1NzI4YTFiOS5qcGc=",
  },
  {
    id: 5,
    name: "Murder Mystery 2",
    genre: ["Crime", "Action", "Mystery", "Thriller", "Comedy"],
    runtime: "90 min",
    image:
      "https://resizing.flixster.com/my9W88nituE2qhdLMIxWFJPdK7Y=/206x305/v2/https://resizing.flixster.com/q8zUtlUy8hfG49LYVHIvZQlNQJE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzM1MTA4MTk5LTFjMDYtNDZiOS1iN2RjLTI5NDU1NzI4YTFiOS5qcGc=",
  },
  {
    id: 6,
    name: "The hatchet wielding hitchhiker",
    genre: ["Crime", "Documentary"],
    runtime: "85 min",
    image:
      "https://resizing.flixster.com/my9W88nituE2qhdLMIxWFJPdK7Y=/206x305/v2/https://resizing.flixster.com/q8zUtlUy8hfG49LYVHIvZQlNQJE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzM1MTA4MTk5LTFjMDYtNDZiOS1iN2RjLTI5NDU1NzI4YTFiOS5qcGc=",
  },
  {
    id: 7,
    name: "Capturing the killer nurse",
    genre: ["Crime", "Documentary"],
    runtime: "94 min",
    image:
      "https://resizing.flixster.com/my9W88nituE2qhdLMIxWFJPdK7Y=/206x305/v2/https://resizing.flixster.com/q8zUtlUy8hfG49LYVHIvZQlNQJE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzM1MTA4MTk5LTFjMDYtNDZiOS1iN2RjLTI5NDU1NzI4YTFiOS5qcGc=",
  },
  {
    id: 8,
    name: "The takeover",
    genre: ["Crime", "Action", "Drama"],
    runtime: "87 min",
    image:
      "https://resizing.flixster.com/my9W88nituE2qhdLMIxWFJPdK7Y=/206x305/v2/https://resizing.flixster.com/q8zUtlUy8hfG49LYVHIvZQlNQJE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzM1MTA4MTk5LTFjMDYtNDZiOS1iN2RjLTI5NDU1NzI4YTFiOS5qcGc=",
  },
];
