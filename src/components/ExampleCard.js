import React from 'react';

const ExampleCard = ({ example, onClick }) => {
  // Find the darkest and lightest colors from the palette
  const getColorBrightness = (color) => {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    return (r * 299 + g * 587 + b * 114) / 1000;
  };

  const getExtremeColors = (colors) => {
    return colors.reduce((acc, current) => {
      const brightness = getColorBrightness(current);
      if (!acc.darkest || brightness < getColorBrightness(acc.darkest)) {
        acc.darkest = current;
      }
      if (!acc.lightest || brightness > getColorBrightness(acc.lightest)) {
        acc.lightest = current;
      }
      return acc;
    }, { darkest: null, lightest: null });
  };

  const { darkest, lightest } = getExtremeColors(example.palette);

  const handleClick = (e) => {
    e.preventDefault();
    onClick(example);
  };

  const handleLinkClick = (e) => {
    e.stopPropagation();
    window.open(example.fontPage, "_blank");
  };

  return (
    <div className="example-card" onClick={handleClick}>
      <h3 style={{ 
        fontFamily: example.font, 
        fontStyle: 'normal',
        color: darkest
      }}>{example.input}</h3>
      <div className="example-palette">
        {example.palette.map((color, index) => (
          <div
            key={index}
            className="color-swatch"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <div className="example-emojis">
        {example.emojis.map((emoji, index) => (
          <span key={index} className="emoji">
            {emoji}
          </span>
        ))}
      </div>
      <div className="example-quote" style={{ fontFamily: example.font, fontStyle: 'normal' }}>{example.quote}</div>
      <div className="example-font">
        <span 
          style={{ 
            fontFamily: example.font,
            color: darkest
          }}
        >
          Font: <b>{example.font}</b>
        </span>
      </div>
    </div>
  );
};

export default ExampleCard; 