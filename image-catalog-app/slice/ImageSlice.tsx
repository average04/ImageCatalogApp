import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

import { ImageState } from "./types";

const initialState: ImageState = {
  filter: "Name",
  filterDirection: "asc",
  images: [
    {
      id: 1,
      name: "The Boss Baby",
      description: "Lets just say Im the boss",
      date: new Date("2022-10-21"),
      path: "/images/1.jpg",
    },
    {
      id: 2,
      name: "Baby Looney Tunes",
      description: "That's all folks!",
      date: new Date("2022-10-22"),
      path: "/images/2.jpg",
    },
    {
      id: 3,
      name: "Rick and Morty",
      description: "We're partners, I guess, and we fight Aliens?",
      date: new Date("2022-10-23"),
      path: "/images/3.png",
    },
    {
      id: 4,
      name: "SpongeBob",
      description:
        "F is for friendship, U is for U and me, N is for anywhere and anytime at all",
      date: new Date("2022-10-24"),
      path: "/images/4.png",
    },
    {
      id: 5,
      name: "Turbo",
      description: "No dream is too big, and no dreamer is too small",
      date: new Date("2022-10-25"),
      path: "/images/5.jpg",
    },
    {
      id: 6,
      name: "Dexter",
      description:
        "This is not fantasy. This is reality. I'm stuck for my life! I'm stuck and I'll be stuck forever!",
      date: new Date("2022-10-26"),
      path: "/images/6.jpg",
    },
    {
      id: 7,
      name: "Ducktales",
      description: "But I'd rather spend time because its not money",
      date: new Date("2022-10-27"),
      path: "/images/7.jpeg",
    },
    {
      id: 8,
      name: "Doraemon",
      description:
        "A person who does nothing but pose is sure to trip up someday.",
      date: new Date("2022-10-28"),
      path: "/images/8.jpg",
    },
    {
      id: 9,
      name: "Stuart",
      description: "C'est banana! Hahaha!",
      date: new Date("2022-10-29"),
      path: "/images/9.jpg",
    },
    {
      id: 10,
      name: "Powerpuff Girls",
      description:
        "It takes a lot more than a couple of cheap shots to make us cry.",
      date: new Date("2022-10-30"),
      path: "/images/10.jpg",
    },
    {
      id: 11,
      name: "SpongeBob and Patrick",
      description: "I wumbo, you wumbo, he she we wumbo.",
      date: new Date("2022-10-31"),
      path: "/images/11.jpg",
    },
    {
      id: 12,
      name: "How to train your dragon",
      description: "You have the heart of a chief and the soul of a dragon",
      date: new Date("2022-11-01"),
      path: "/images/12.jpg",
    },
  ],
};

export const imageSlice = createSlice({
  name: "imageCatalog",
  initialState,
  reducers: {
    toggleFilter: (state) => {
      state.filter = state.filter === "Name" ? "Date" : "Name";
    },
    toggleFilterDirection: (state) => {
      state.filterDirection = state.filterDirection === "asc" ? "desc" : "asc";
    },
    sortImages: (state) => {
      if (state.filter === "Name") {
        if (state.filterDirection === "asc") {
          state.images = state.images.sort((a, b) => {
            const fa = a.name.toLowerCase();
            const fb = b.name.toLowerCase();

            if (fa < fb) {
              return -1;
            }
            if (fa > fb) {
              return 1;
            }
            return 0;
          });
        } else if (state.filterDirection === "desc") {
          state.images = state.images.sort((a, b) => {
            const fa = a.name.toLowerCase();
            const fb = b.name.toLowerCase();

            if (fa < fb) {
              return 1;
            }
            if (fa > fb) {
              return -1;
            }
            return 0;
          });
        }
      } else {
        if (state.filterDirection === "asc") {
          state.images = state.images.sort((a, b) => {
            const fa = a.date;
            const fb = b.date;

            if (fa < fb) {
              return -1;
            }
            if (fa > fb) {
              return 1;
            }
            return 0;
          });
        } else if (state.filterDirection === "desc") {
          state.images = state.images.sort((a, b) => {
            const fa = a.date;
            const fb = b.date;

            if (fa < fb) {
              return 1;
            }
            if (fa > fb) {
              return -1;
            }
            return 0;
          });
        }
      }
    },
  },
});

export const { toggleFilter, toggleFilterDirection, sortImages } =
  imageSlice.actions;

export default imageSlice.reducer;
