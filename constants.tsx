import React from 'react';
import { Movie, Product, SocialPost } from './types';

export const MOVIES: (Movie & { synopsis?: string, director?: string })[] = [
  {
    id: '1',
    title: 'A Royal Christmas Crush',
    year: 2023,
    role: 'Prince Henry',
    image: 'https://picsum.photos/seed/royalxmas/400/600',
    tagline: 'Ice castles and warm hearts.',
    director: 'Marita Grabiak',
    synopsis: 'Stephen Huszar stars as Prince Henry. When a dedicated architect (Katie Cassidy) travels to the Ice Hotel to work, she bumps into a royal guest who melts her heart and changes her career path forever.'
  },
  {
    id: '2',
    title: 'Love in Glacier National',
    year: 2023,
    role: 'Chris',
    image: 'https://picsum.photos/seed/glacier/400/600',
    tagline: 'An avalanche of romance.',
    director: 'Christie Will Wolf',
    synopsis: 'An avalanche forecaster expects a quiet winter until a mountain rescuer (Huszar) slides into her life. Together they face the elements and their growing feelings.'
  },
  {
    id: '3',
    title: 'Navigating Christmas',
    year: 2023,
    role: 'Peter',
    image: 'https://picsum.photos/seed/navigate/400/600',
    tagline: 'Finding the way home.',
    director: 'Peter Benson',
    synopsis: 'Recently divorced Melanie and her son visit a remote island for Christmas, only to find themselves running a lighthouse with the surly but charming owner, Peter (Huszar).'
  },
  {
    id: '4',
    title: 'Chesapeake Shores',
    year: 2016,
    role: 'Luke',
    image: 'https://picsum.photos/seed/chesapeake/400/600',
    tagline: 'Series Regular',
    director: 'Various',
    synopsis: 'A multi-generational family drama where Stephen plays Luke, a man with a troubled past seeking redemption and finding a new family in Chesapeake Shores.'
  },
  {
    id: '5',
    title: 'Ruby Herring Mysteries',
    year: 2019,
    role: 'Jake Killian',
    image: 'https://picsum.photos/seed/ruby/400/600',
    tagline: 'Silent Witness',
    director: 'Neill Fearnley',
    synopsis: 'Consumer reporter Ruby Herring stumbles onto a murder, and the handsome detective Jake Killian (Huszar) reluctantly lets her help solve the case.'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Autographed Script',
    price: 150,
    category: 'Collectibles',
    image: 'https://picsum.photos/seed/script/300/300',
    isNew: true
  },
  {
    id: 'p2',
    name: 'Huszar Hoodie',
    price: 65,
    category: 'Apparel',
    image: 'https://picsum.photos/seed/hoodie/300/300'
  }
];

export const SOCIAL_POSTS: SocialPost[] = [
  {
    id: 's1',
    platform: 'Instagram',
    content: 'Wrapped on set! Can’t wait for you all to see this one. 🎬 #SetLife',
    likes: '14.2K',
    image: 'https://picsum.photos/seed/onset/500/500'
  },
  {
    id: 's2',
    platform: 'Twitter',
    content: 'Who is tuning in tonight? 🎄',
    likes: '3.4K'
  }
];

export const NAV_LINKS = [
  { name: 'Reel', href: '#reel' },
  { name: 'Appearances', href: '#appearances' },
  { name: 'Availability', href: '#availability' },
  { name: 'Work', href: '#work' },
  { name: 'Now Playing', href: '#now-playing' },
  { name: 'Contact', href: '#contact' },
];

// Generate 10 images for each category for the slider
export const GALLERY_DATA = {
  Dramatic: Array.from({ length: 10 }).map((_, i) => ({
    id: `d-${i}`,
    src: `https://picsum.photos/seed/drama${i}/800/600`,
    caption: `Scene Study ${i + 1}`
  })),
  Commercial: Array.from({ length: 10 }).map((_, i) => ({
    id: `c-${i}`,
    src: `https://picsum.photos/seed/comm${i}/800/600`,
    caption: `Brand Campaign ${i + 1}`
  })),
  Film: Array.from({ length: 10 }).map((_, i) => ({
    id: `f-${i}`,
    src: `https://picsum.photos/seed/film${i}/800/600`,
    caption: `Feature Still ${i + 1}`
  }))
};

export const REEL_CONTENT = {
  Dramatic: {
    title: 'Dramatic Works 2024',
    poster: 'https://picsum.photos/seed/dramaposter/1920/1080',
    duration: '02:14'
  },
  Commercial: {
    title: 'Commercial & Brand',
    poster: 'https://picsum.photos/seed/commposter/1920/1080',
    duration: '01:05'
  },
  Film: {
    title: 'Feature Film Highlights',
    poster: 'https://picsum.photos/seed/filmposter/1920/1080',
    duration: '03:30'
  }
};