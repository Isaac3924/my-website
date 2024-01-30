import React, { useEffect, useRef } from "react";
import anime from "animejs";

//const wrapper = document.getElementById("tiles");

const GridBackground = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
      const wrapper = wrapperRef.current;


      let columns = Math.floor(document.body.clientWidth / 50);
      let rows = Math.floor(document.body.clientHeight / 50);

      let toggled = false;

      const handleOnClick = index => {
        toggled = !toggled;

        const aboutMeElement = document.getElementById('aboutMe');
        if (aboutMeElement) {
          aboutMeElement.classList.toggle("toggled", toggled);
        }
        
        anime(
          {
            targets: ".tile",
            opacity: toggled ? 0 : 1,
            delay: anime.stagger(50, {
              grid: [columns, rows],
              from: index
            })
          }
        )
      }

      const createTile = index => {
        const tile = document.createElement("div");
        
        tile.classList.add("tile");

        tile.onclick = e => handleOnClick(index);
        
        return tile;
      };

      const createTiles = (quantity) => 
      {
        Array.from(Array(quantity)).map((tile, index) => {
            wrapper.appendChild(createTile(index));
          }
        );
      };

      const createGrid = () => 
      {
        wrapper.innerHTML = "";
        columns = Math.floor(document.body.clientWidth / 50);
        rows = Math.floor(document.body.clientHeight / 50);

        wrapper.style.setProperty("--columns", columns);
        wrapper.style.setProperty("--rows", rows);

        createTiles(columns * rows);
      };

      createGrid();
      window.onresize = () => createGrid();
    }, [] //this has an empty dependency array which means this effect runs once after initial render.
  );

  return <div id="tiles" className="grid-background" ref={wrapperRef}></div>
};

export default GridBackground;