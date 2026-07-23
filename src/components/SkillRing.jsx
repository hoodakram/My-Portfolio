import { useEffect, useRef, useState } from "react";

export default function SkillRing({
  items,
  radius = 180,
  sceneSize = 300,
  coreSize = 150,
  coreLabel = "Full Stack Dev",
  coreGap = "8px",
  coreFontSize = "13px",
}) {
  const sceneRef = useRef(null);

  const [rotation, setRotation] = useState(0);
  const rotationRef = useRef(0);

  const drag = useRef({
    active: false,
    startX: 0,
    startRotation: 0,
  });

  useEffect(() => {
    let raf;
    let autoRotate = true;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const animate = () => {
      if (autoRotate && !drag.current.active && !reduced) {
        setRotation((r) => {
          const next = r + 0.06;
          rotationRef.current = next;
          return next;
        });
      }
      raf = requestAnimationFrame(animate);
    };

    animate();

    const scene = sceneRef.current;
    if (!scene) return undefined;

    const down = (e) => {
      drag.current.active = true;
      drag.current.startX = e.clientX;
      drag.current.startRotation = rotationRef.current;
      scene.style.cursor = "grabbing";
    };

    const move = (e) => {
      if (!drag.current.active) return;

      const diff = e.clientX - drag.current.startX;
      const next = drag.current.startRotation + diff * 0.18;
      rotationRef.current = next;
      setRotation(next);
    };

    const up = () => {
      drag.current.active = false;
      scene.style.cursor = "grab";
    };

    const enter = () => (autoRotate = false);
    const leave = () => (autoRotate = true);

    scene.addEventListener("pointerdown", down);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);

    scene.addEventListener("mouseenter", enter);
    scene.addEventListener("mouseleave", leave);

    return () => {
      cancelAnimationFrame(raf);

      scene.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);

      scene.removeEventListener("mouseenter", enter);
      scene.removeEventListener("mouseleave", leave);
    };
  }, []);

  const angleStep = 360 / items.length;

  return (
    <div
      ref={sceneRef}
      className="orbit-scene"
      style={{
        width: sceneSize,
        height: sceneSize,
        cursor: "grab",
      }}
    >
      {/* CORE */}
      <div
        className="orbit-core"
        style={{
          width: coreSize,
          height: coreSize,
          gap: coreGap,
          fontSize: coreFontSize,
        }}
      >
        {coreLabel.split("<br/>").map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>

      {/* SKILLS */}
      {items.map((item, index) => {
        const angle = (index * angleStep + rotation) * (Math.PI / 180);

        const x = Math.sin(angle) * radius;

        const z = Math.cos(angle) * radius;

        const scale = 0.65 + ((z + radius) / (2 * radius)) * 0.55;

        const opacity = 0.15 + ((z + radius) / (2 * radius)) * 0.85;

        const front = z > 0;

        return (
          <div
            key={item.label}
            className="node"
            style={{
              transform: `
                translate(-50%, -50%)
                translate3d(${x}px,0,${z}px)
                scale(${scale})
              `,
              opacity,
              zIndex: Math.round(z + radius),
            }}
          >
            <em
              style={{
                background: item.color,
              }}
            />

            {item.label}
          </div>
        );
      })}
    </div>
  );
}