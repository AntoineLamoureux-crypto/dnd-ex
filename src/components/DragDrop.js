import React from 'react'
import Picture from './Picture'
import { useState } from 'react'
import { useDrop } from 'react-dnd'
const PictureList = [
    {
        id : 1,
        url : "https://i.pinimg.com/originals/2e/a2/56/2ea256133422474e5c59a61109b83d96.jpg"
    },
    {
        id : 2,
        url : "https://blog.displate.com/wp-content/uploads/2021/09/img_6138b2c304a1f.jpg"
    },
    {
        id : 3,
        url : "https://i.pinimg.com/originals/55/1d/1f/551d1f8df2c5e609e13b499c53f7408a.png"
    },

]


function DragDrop() {
    const [board, setBoard] = useState([])

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
        }),
      }));

      const addImageToBoard = (id) => {
        const pictureList = PictureList.filter((picture) => id === picture.id);
        setBoard((board) => [...board, pictureList[0]]);
      };

      return (
        <>
          <div className="Pictures">
            {PictureList.map((picture) => {
              return <Picture url={picture.url} id={picture.id} />;
            })}
          </div>
          <div className="Board" ref={drop}>
            {board.map((picture) => {
              return <Picture url={picture.url} id={picture.id} />;
            })}
          </div>
        </>
      );
}

export default DragDrop