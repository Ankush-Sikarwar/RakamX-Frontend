import React, {memo, lazy, Suspense } from "react";
import { HeroSectionOne } from "./Homepage1";
import { StickyScroll } from "./Homepage2";
import Navbar from "../Navbar/Navbar";
import LoadingFallback from "../Loading/Loading";

const Carousel = React.lazy(() => import("./Homepage3/HomepageCarousel3"));
const Card = React.lazy(() => import("./Homepage3/HomepageCard3"));
import { crouselCards } from "../JS Data/CrouselCard";
import { Stickycards } from "../JS Data/Sticky";
import { content } from "../JS Data/StickyScroll";
import { HoverEffect } from "../ui/card-hover-effect";
import ScrollingCardCarousel from "./Homepage5";
import cardHoverItems from "./Homepage4";
import { InfiniteMovingCards } from "../ui/infinite-moving-card";
import infiniteTestimonials from "../JS Data/Infinite-moving-cards";
import ContactUs from "../ContactUs/ContactUs";
import CounterNumbers from "./Homepage6";

const LandingPage = memo(() =>{
  console.log(" landing renderd");
  
  return (
    <div className="flex flex-col">
      <Navbar />
      <HeroSectionOne />
      <StickyScroll content={content} />

      {/* Carousel with cards */}
      <React.Suspense fallback={<LoadingFallback />}>
        <div className="bg-black">
          <Carousel
            items={crouselCards.map((item, index) => (
              <Card key={item.title} card={item} layout />
            ))}
          />
        </div>
      </React.Suspense>

      <div className="p-8 bg-black">
        <HoverEffect
          items={cardHoverItems}
          className="gap-6" // adds gap between grid items
        />
      </div>

      <div>
        <CounterNumbers/>
      </div>

      <div className="bg-black py-25 ">
        <div className="pb-15" >
          <h3>
            <span className="text-white text-4xl font-sans flex justify-center">
              Your customers will love Credit-as-a-Feature.
            </span>{" "}
            <br />{" "}
          </h3>
          <span className="text-indigo-400 text-4xl flex justify-center" >Look at what some of our Existing Clients experience!</span>
        </div>
        <div className="flex justify-center pt-2" >
          <InfiniteMovingCards
            items={infiniteTestimonials}
            direction="left"
            speed="slow"
            pauseOnHover={true}
            className="my-10"
          />
        </div>
      </div>
      
        
   
      
    </div>
  );
})


export default LandingPage;