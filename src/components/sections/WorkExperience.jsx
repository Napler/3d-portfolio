import { useRef, useState, useEffect } from "react";

export default function WorkExperience() {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [localPos, setLocalPos] = useState({ x: 0, y: 0 });
  const [isNear, setIsNear] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const localX = e.clientX - rect.left;
        const localY = e.clientY - rect.top;

        const margin = 100;
        const nearEdge =
          localX < margin ||
          localY < margin ||
          localX > rect.width - margin ||
          localY > rect.height - margin;

        setIsNear(nearEdge);
        setLocalPos({ x: localX, y: localY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="mx-auto padding-x-lg min-h-screen w-full bg-gray-950 flex items-center justify-center box-border">
      <div
        ref={cardRef}
        className="relative rounded-2xl bg-gradient-to-br from-[#111827] to-[#1f2937] text-white text-center text-3xl font-semibold max-w-4xl w-full p-10 transition-all duration-300 shadow-xl"
        style={{
          boxShadow: isNear
            ? "0 0 40px rgba(255,255,255,0.15)"
            : "0 0 10px rgba(0,0,0,0.3)",
        }}
      >
        I still don't have any work experience 😅

        <div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background: isNear
              ? `radial-gradient(250px at ${localPos.x}px ${localPos.y}px, rgba(255,255,255,0.15), transparent)`
              : "transparent",
            transition: "background 0.2s ease",
          }}
        />
      </div>
    </div>
  );
}
