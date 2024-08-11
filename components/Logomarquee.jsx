import React from 'react'
import { cn } from "../lib/utils";
import Marquee from "./magicui/marquee";
import Image from 'next/image';
import css from '../public/assets/css.png'
import python from '../public/assets/python.png'
import html from '../public/assets/html-5.png'
import nodejs from '../public/assets/node-js.png'

function Logomarquee() {
  return (
    <div ><MarqueeDemo/></div>
  )
}

export default Logomarquee





const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: css,
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: python,
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: html,
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: nodejs,
  },

];





const ReviewCard = ({ img, name, username, body }) => (
  <figure className="relative w-40 cursor-pointer overflow-hidden"
  >
    <div className="flex flex-col items-center gap-2">
      <Image className="" width="40" height="40" alt={`${name}'s avatar`} src={img} />
      <span>{name}</span>
      <div className="flex flex-col">
      </div>
    </div>
  
  </figure>
);

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background z-50"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background z-50"></div>
    </div>
  );
}