import CategoryProducts from "./CategoryProducts";
import "../css/Products.css";
import { useEffect, useRef, useState } from "react";

function Products() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const pauseDuration = 15000;
  let touchMoveTimeout: ReturnType<typeof setTimeout>;
  let scrollLeft = -1;

  const products = {
    dairy: {
      milk: 1,
      cheese: 2,
    },
    vegetables: {
      cucumber: 1,
      tomato: 2,
    },
    // vegetables1: {
    //   cucumber: 1,
    //   tomato: 2,
    // },
    // vegetables2: {
    //   cucumber: 1,
    //   tomato: 2,
    // },
    // vegetables3: {
    //   cucumber: 1,
    //   tomato: 2,
    // },
    // vegetables4: {
    //   cucumber: 1,
    //   tomato: 2,
    // },
    // vegetables5: {
    //   cucumber: 1,
    //   tomato: 2,
    // },
    // vegetables6: {
    //   cucumber: 1,
    //   tomato: 2,
    // },
  };

  useEffect(() => {
    return () => clearTimeout(touchMoveTimeout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && scrollRef.current) {
        if (scrollRef.current.scrollLeft === scrollLeft) {
          setScrollDirection(scrollDirection * -1);
        }
        scrollLeft = scrollRef.current.scrollLeft;
        scrollRef.current.scrollBy(scrollDirection * 2, 0);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [scrollDirection, isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    clearTimeout(touchMoveTimeout);
    touchMoveTimeout = setTimeout(() => setIsPaused(false), pauseDuration);
  };

  const handleTouchStart = () => {
    clearTimeout(touchMoveTimeout);
    setIsPaused(true);
    touchMoveTimeout = setTimeout(() => setIsPaused(false), pauseDuration);
  };

  return (
    <div
      className="products"
      ref={scrollRef}
      onTouchStart={handleTouchStart}
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {Object.keys(products).map((key) => (
        <CategoryProducts handleVerticalScroll={handleTouchStart} />
      ))}
    </div>
  );
}

export default Products;
