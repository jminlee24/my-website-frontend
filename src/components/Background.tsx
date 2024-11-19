import { useEffect, useRef } from "react";

const Background = () => {
  const canvasRef = useRef(null);

  const generateRandomPoints = (
    numPoints: number,
    width: number,
    height: number
  ): { x: number; y: number }[] => {
    const ret = [];

    for (let i = 0; i < numPoints; i++) {
      const x = Math.floor(Math.random() * width);
      const y = Math.floor(Math.random() * height);
      ret.push({ x: x, y: y });
    }

    return ret;
  };

  useEffect(() => {
    const canvas = canvasRef.current! as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!;

    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const points = generateRandomPoints(
      100,
      ctx.canvas.width,
      ctx.canvas.height
    );

    const draw = (ctx: CanvasRenderingContext2D, time: number) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      ctx.fillStyle = "#FFFFFF";

      for (let i = 0; i < points.length; i++) {
        const point = points[i];
        ctx.beginPath();
        ctx.arc(
          point.x,
          point.y,
          2 * Math.sin(time / 50 + i) + 2,
          0,
          2 * Math.PI
        );
        ctx.fill();
      }
      return;
    };

    let animationFrameId: number;
    let frameCount: number = 0;

    const render = () => {
      frameCount++;
      draw(ctx, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas className="aboslute fixed" ref={canvasRef} />;
};

export default Background;
