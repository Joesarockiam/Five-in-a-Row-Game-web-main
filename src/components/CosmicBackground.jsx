import React from 'react';

const CosmicBackground = () => {
  const styles = {
    root: {
      margin: 0,
      background: `radial-gradient(ellipse at center, rgba(127,0,173,0.6) 0%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,1) 90%),
                   url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/31787/stars.jpg)`,
      backgroundSize: 'cover',
      color: 'white',
      overflow: 'hidden',
      fontFamily: `'Monoton', monospace`,
      fontSize: '2em',
      zIndex: -5,
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
    },
    overlay: {
      position: 'absolute',
      right: 0,
      left: 0,
      margin: 'auto',
      width: '100%',
      textAlign: 'center',
    },
    h1: {
      animation: 'neon1 1.5s ease-in-out infinite alternate',
    },
    layer0: {
      background: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,71,255,1) 100%)',
      height: '400px',
      width: '200vw',
      opacity: 1,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      margin: '0 -50%',
      overflow: 'hidden',
      transform: 'perspective(200px) rotateX(60deg)',
      zIndex: -5,
    },
    layer1: {
      background: 'linear-gradient(45deg, rgba(92,71,255,1) 0%, rgba(92,71,255,0) 50%, rgba(92,71,255,0) 100%)',
      height: 'inherit',
      width: 'inherit',
      opacity: 1,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      margin: 'auto',
      zIndex: -5,
    },
    layer2: {
      background: 'linear-gradient(135deg, rgba(92,71,255,0) 0%, rgba(92,71,255,0) 50%, rgba(92,71,255,1) 100%)',
      height: 'inherit',
      width: 'inherit',
      opacity: 1,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      margin: 'auto',
      zIndex: -5,
    },
    layerCorner: {
      background: 'linear-gradient(to bottom, rgba(71,255,203,1) 0%, rgba(96,130,223,0) 54%, rgba(117,24,240,0) 100%)',
      height: 'inherit',
      width: 'inherit',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      margin: 'auto',
      zIndex: -5,
      animation: 'layercorneranim 2.5s ease-in-out infinite alternate',
    },
    hey: {
      width: '100%',
      backgroundColor: '#011',
      position: 'absolute',
      bottom: '253px',
      right: 0,
      left: 0,
      margin: 'auto',
      zIndex: -10,
      transform: 'perspective(200px)',
    },
    layerUp: {
      background: 'linear-gradient(to bottom, rgba(71,255,203,0) 0%, rgba(71,255,203,0) 50%, rgba(71,255,203,1) 100%)',
      height: '300px',
      width: 'inherit',
      opacity: 1,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      margin: 'auto',
      overflow: 'hidden',
      zIndex: -5,
      animation: 'layerupanim 2.5s ease-in-out infinite alternate',
    },
    lines: {
      backgroundSize: '40px 40px',
      backgroundImage: `
        repeating-linear-gradient(0deg, #60DCD3, #60DCD3 2px, transparent 2px, transparent 40px),
        repeating-linear-gradient(-90deg, #60DCD3, #60DCD3 2px, transparent 2px, transparent 40px)
      `,
      height: '400px',
      width: '100%',
      opacity: 1,
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -4,
    },
    // Additional styles can be added inline or via styled-components
  };

  return (
    <div style={styles.root}>
      <style>
        {`
          @keyframes neon1 {
            from {
              text-shadow: 0 0 10px #fff, 0 0 20px #f0f, 0 0 30px #f0f, 0 0 40px #0ff, 0 0 70px #0ff;
            }
            to {
              text-shadow: 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff, 0 0 50px #f0f, 0 0 60px #f0f;
            }
          }
          @keyframes layercorneranim {
            0% {
              transform: translateY(0);
              opacity: 0.8;
            }
            100% {
              transform: translateY(-20px);
              opacity: 0.3;
            }
          }
          @keyframes layerupanim {
            0% {
              transform: translateY(0);
              opacity: 0.3;
            }
            100% {
              transform: translateY(-20px);
              opacity: 0.8;
            }
          }
        `}
      </style>
      <div style={styles.hey}>
        <div style={styles.layerUp}></div>
      </div>
      <div style={styles.layer0}>
        <div style={styles.layer1}>
          <div style={styles.layer2}>
            <div style={styles.lines}>
              <div style={styles.layerCorner}></div>
            </div>
          </div>
        </div>
      </div>
      <div style={styles.overlay}>
      </div>
    </div>
  );
};

export default CosmicBackground;
