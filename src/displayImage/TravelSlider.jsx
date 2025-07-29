import React, { useState, useEffect, useRef } from 'react';
import styles from './TravelSlider.module.css'; // Import CSS module

function TravelSlider({ items }) {
  const [currentItems, setCurrentItems] = useState(items);
  const itemRefs = useRef([]);
  const sliderRef = useRef(null); // Ref for the slider container

  useEffect(() => {
    setCurrentItems(items);
    itemRefs.current = itemRefs.current.slice(0, items.length);
  }, [items]);

  const handleNext = () => {
    setCurrentItems((prevItems) => {
      const newItems = [...prevItems];
      const firstItem = newItems.shift();
      newItems.push(firstItem);
      return newItems;
    });
  };

  const handlePrev = () => {
    setCurrentItems((prevItems) => {
      const newItems = [...prevItems];
      const lastItem = newItems.pop();
      newItems.unshift(lastItem);
      return newItems;
    });
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'ArrowRight') {
      handleNext();
      // Optional: Focus the new first item after animation
    } else if (event.key === 'ArrowLeft') {
      handlePrev();
      // Optional: Focus the new first item after animation
    }
  };

  // Effect to handle initial layout or animations
  useEffect(() => {
    // Add a class to the first item to make its content visible initially
    if (itemRefs.current.length > 0 && itemRefs.current[0]) {
        const firstItemContent = itemRefs.current[0].querySelector(`.${styles.content}`);
        if(firstItemContent) {
            firstItemContent.classList.add(styles.activeContent);
        }
    }

    // Clean up the class when items change (optional, depending on desired behavior)
    return () => {
        if (itemRefs.current.length > 0 && itemRefs.current[0]) {
            const firstItemContent = itemRefs.current[0].querySelector(`.${styles.content}`);
            if(firstItemContent) {
                firstItemContent.classList.remove(styles.activeContent);
            }
        }
    };

  }, [currentItems]); // Re-run effect when currentItems change

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [currentItems]); // Re-run effect when currentItems change

  // Full-screen effect
  useEffect(() => {
    const handleFullScreenKeyDown = (event) => {
      if (event.code === 'Space') {
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else {
          if (sliderRef.current) {
            sliderRef.current.requestFullscreen();
          }
        }
      }
    };

    document.addEventListener('keydown', handleFullScreenKeyDown);

    return () => {
      document.removeEventListener('keydown', handleFullScreenKeyDown);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <div className={styles.container} ref={sliderRef}> {/* Attach ref to the container */}
      <div className={styles.slide}>
        {currentItems.map((item, index) => {
          const textColor = item.textColor || 'white'; // Use item.textColor if provided, otherwise default to white
          return (
            <div
              key={item.id}
              className={styles.item}
              style={{ backgroundImage: `url(${item.backgroundImage})` }}
              tabIndex={0} // Make the item focusable
              onKeyDown={(event) => handleKeyDown(event, index)}
              ref={el => itemRefs.current[index] = el}
            >
              <div className={styles.content} style={{ color: textColor }}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.des}>{item.des}</div>
                <button>See More</button>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.button}>
        <button className={styles.prev} onClick={handlePrev}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className={styles.next} onClick={handleNext}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default TravelSlider;
