import React, { useEffect } from 'react';

const ShootingStars = () => {
  const starCount = 50;

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      body {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: radial-gradient(ellipse at bottom, #0d1d31 0%, #0c0d13 100%);
        overflow: hidden;
      }

      .stars {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 120%;
        transform: rotate(-45deg);
      }

      .star {
        --star-color: #fff;
        --star-tail-length: 6em;
        --star-tail-height: 2px;
        --star-width: calc(var(--star-tail-length) / 6);
        --fall-duration: 9s;
        --tail-fade-duration: var(--fall-duration);

        position: absolute;
        width: var(--star-tail-length);
        height: var(--star-tail-height);
        color: var(--star-color);
        background: linear-gradient(45deg, currentColor, transparent);
        border-radius: 50%;
        filter: drop-shadow(0 0 6px currentColor);
        transform: translate3d(104em, 0, 0);
        animation: fall var(--fall-duration) linear infinite, tail-fade var(--tail-fade-duration) ease-out infinite;
      }

      .star::before, .star::after {
        content: '';
        position: absolute;
        top: 0;
        left: calc(var(--star-width) / -2);
        width: var(--star-width);
        height: 100%;
        background: linear-gradient(45deg, transparent, currentColor, transparent);
        border-radius: inherit;
        animation: blink 2s linear infinite;
      }

      .star::before {
        transform: rotate(45deg);
      }

      .star::after {
        transform: rotate(-45deg);
      }

      @keyframes fall {
        to {
          transform: translate3d(-30em, 0, 0);
        }
      }

      @keyframes tail-fade {
        0%, 50% {
          width: var(--star-tail-length);
          opacity: 1;
        }
        70%, 80% {
          width: 0;
          opacity: 0.4;
        }
        100% {
          width: 0;
          opacity: 0;
        }
      }

      @keyframes blink {
        50% {
          opacity: 0.6;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const random = (min, max) => Math.random() * (max - min) + min;

  const stars = Array.from({ length: starCount }, (_, i) => {
    const tailLength = `${random(5, 7.5)}em`;
    const topOffset = `${random(0, 100)}vh`;
    const duration = `${random(6, 12)}s`;
    const delay = `${random(0, 10)}s`;

    const style = {
      top: topOffset,
      '--star-tail-length': tailLength,
      '--fall-duration': duration,
      '--tail-fade-duration': duration,
      '--fall-delay': delay,
    };

    return <div key={i} className="star" style={style}></div>;
  });

  return <div className="stars">{stars}</div>;
};

export default ShootingStars;
