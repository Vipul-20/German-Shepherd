// API
/*
breeds/list/all - List of all breeds
breed/Affenpinscher/images/random  - single image
breed/Affenpinscher/images  - single images
*/

import Carousel from "./components/Carousel";
import { capitalize } from "./until";

// DOM Selection
const selectEl = document.querySelector("select");
const carouselContainer = document.querySelector(".carousel-inner");

// API
const BASE_URL = `https://dog.ceo/api/`;