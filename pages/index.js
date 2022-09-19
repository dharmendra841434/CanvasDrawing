import React, { useState, useRef, useEffect } from "react";
export default function Home() {
  const cutRef = useRef(null);
  const canvasRef = useRef(null);

  const [canvasH, setCanvasH] = useState("");
  const [canvasW, setCanvasW] = useState("");
  const [canvasQ, setCanvasQ] = useState("");
  const [cutH, setCutH] = useState("");
  const [cutW, setCutW] = useState("");
  const [cutQ, setCutQ] = useState("");

  useEffect(() => {}, []);
  let cutItems = [];
  let canvasItems = [];

  const onCreate = () => {
    // cut canvas functionality
    for (let i = 0; i < cutQ; i++) {
      cutItems.push({ h: cutH, w: cutW });
    }
    const cuts = cutRef.current;
    const contextCut = cuts.getContext("2d");
    contextCut.fillStyle = "pink";
    for (let k = 0; k < cutItems.length; k++) {
      contextCut.fillRect(k + 50, k + 50, cutItems[k].h, cutItems[k].w);
    }
    console.log(cutItems, "dsjhs");

    //default canvas functionality
    /*  for (let index = 0; index < canvasQ; index++) {
      canvasItems.push({ h: cutH, w: cutW });
    }
    const canvas = canvasRef.current;
    const contextCanvas = canvas.getContext("2d");
    contextCanvas.fillStyle = "orange";

    for (let j = 0; j < canvasItems.length; j++) {
      contextCanvas.fillRect(
        j + 50,
        j + 50,
        canvasItems[j].h,
        canvasItems[j].w
      );
    } */
  };

  function draw() {
    const canvas = cutRef.current;
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");

      for (let i = 0; i < cutQ; i++) {
        cutItems.push({ h: cutH, w: cutW });
        for (let j = 0; j < cutItems.length; j++) {
          const x = 25 + j * 100; // x coordinate
          const y = 25 + i * 100; // y coordinate
          console.log(y);
          ctx.clearRect(50, y, cutItems[j].w, cutItems[j].h);
          ctx.fillStyle = "orange";

          ctx.rect(50, y, cutItems[j].w, cutItems[j].h);

          ctx.fill();
        }
      }
    }
  }

  return (
    <div className=" flex flex-col items-center justify-center">
      <div className=" ">
        <h1 className=" font-bold text-2xl text-gray-800 text-center">
          Cut Sizes
        </h1>
        <div className=" flex items-center gap-x-8 mt-4">
          <div className=" flex flex-col">
            <label>Height</label>
            <input
              maxLength={3}
              type="number"
              onChange={(e) => {
                setCutH(e.target.value);
              }}
              className=" outline-none border border-gray-500 w-20 appearance-none"
            />
          </div>
          <div className=" flex flex-col">
            <label>Width</label>
            <input
              maxLength={3}
              type="number"
              onChange={(e) => {
                setCutW(e.target.value);
              }}
              className=" outline-none border border-gray-500 w-20 appearance-none"
            />
          </div>
          <div className=" flex flex-col">
            <label>Qt</label>
            <input
              maxLength={3}
              type="number"
              onChange={(e) => {
                setCutQ(e.target.value);
              }}
              className=" outline-none border border-gray-500 w-20 appearance-none"
            />
          </div>
        </div>
      </div>
      <div className=" mt-6 ">
        <h1 className=" font-bold text-2xl text-gray-800 text-center">
          Canvas Sizes
        </h1>
        <div className=" flex items-center gap-x-8 mt-4">
          <div className=" flex flex-col">
            <label>Height</label>
            <input
              maxLength={3}
              type="number"
              onChange={(e) => {
                setCanvasH(e.target.value);
              }}
              className=" outline-none border border-gray-500 w-20 appearance-none"
            />
          </div>
          <div className=" flex flex-col">
            <label>Width</label>
            <input
              maxLength={3}
              type="number"
              onChange={(e) => {
                setCanvasW(e.target.value);
              }}
              className=" outline-none border border-gray-500 w-20 appearance-none"
            />
          </div>
          <div className=" flex flex-col appearance-none">
            <label>Qt</label>
            <input
              maxLength={3}
              type="number"
              onChange={(e) => {
                setCanvasQ(e.target.value);
              }}
              className=" outline-none border border-gray-500 w-20 "
            />
          </div>
        </div>
      </div>
      <button
        onClick={draw}
        className=" bg-green-500 px-8 mt-8 text-white py-1 rounded-lg"
      >
        Create
      </button>
      <div className=" ">
        <canvas
          ref={cutRef}
          width={500}
          height={500}
          className=" border border-red-600"
        ></canvas>
        ;
        {/*  {cutItems &&
          cutItems.length > 0 &&
          cutItems.map((item, index) => {
            <canvas ref={cutRef}>
             
            </canvas>;
          })} */}
      </div>
    </div>
  );
}
