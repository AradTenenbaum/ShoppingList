import CategoryProducts from "./CategoryProducts";
import "../css/Products.css";
import { useEffect, useRef, useState } from "react";
import { Categories } from "../interfaces/category.interface";
import { Container } from "@mui/material";
import { getObjKeysAmount } from "../utils/object";
import { useAppSelector } from "../hooks/reduxHooks";

function Products({
  productsToCategory,
  onRemoveProduct,
}: {
  productsToCategory: Categories;
  onRemoveProduct: Function;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const totalItems = useAppSelector((state) => state.totalItems);
  const pauseDuration = 15000;
  let touchMoveTimeout: ReturnType<typeof setTimeout>;
  let scrollLeft = -1;

  useEffect(() => {
    return () => clearTimeout(touchMoveTimeout);
  }, []);

  useEffect(() => {
    // If there are enough categories with products and the horizontal scroll is big enough
    // This will make the shopping list scroll right and left for a nice
    // dynamic display of the list.
    if (Object.keys(productsToCategory).length > 3) {
      const interval = setInterval(() => {
        if (!isPaused && scrollRef.current) {
          const maxScroll =
            scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
          if (maxScroll > 300) {
            if (scrollRef.current.scrollLeft === scrollLeft) {
              setScrollDirection(scrollDirection * -1);
            }
            scrollLeft = scrollRef.current.scrollLeft;
            scrollRef.current.scrollBy(scrollDirection * 2, 0);
          }
        }
      }, 20);

      return () => clearInterval(interval);
    }
  }, [scrollDirection, isPaused]);

  // Pause the auto scroll when the mouse hover the list
  const handleMouseEnter = () => {
    clearTimeout(touchMoveTimeout);
    setIsPaused(true);
  };
  const handleMouseLeave = () => {
    clearTimeout(touchMoveTimeout);
    touchMoveTimeout = setTimeout(() => setIsPaused(false), pauseDuration);
  };
  // In case of a mobile phone, when touching to screen it will stop the auto scroll
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
      {Object.keys(productsToCategory).length > 0 && totalItems > 0 ? (
        Object.keys(productsToCategory)
          .filter(
            (categoryName) =>
              getObjKeysAmount(productsToCategory[categoryName]) > 0
          )
          .map((categoryName) => (
            <CategoryProducts
              onRemoveProduct={onRemoveProduct}
              key={categoryName}
              products={productsToCategory[categoryName]}
              categoryName={categoryName}
              handleVerticalScroll={handleTouchStart}
            />
          ))
      ) : (
        <Container>No products yet</Container>
      )}
    </div>
  );
}

export default Products;
