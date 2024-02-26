'use client';

import { useRef, useState } from 'react';
import TinyColor from 'tinycolor2';

const colors = Object.keys(TinyColor.names)
  .filter((_) => !_.endsWith('grey'))
  .map((color) => TinyColor(color));

function ColorBlock({ color, onColorClick }: { color: TinyColor.Instance; onColorClick: Function }) {
  return (
    <li
      className="p-2 h-32 w-1/4 lg:w-1/6"
      style={{ backgroundColor: color.toHex8String() }}
      key={color.toHex8String()}
    >
      <button
        className="w-full h-full text-left items-start inline-flex "
        style={{ color: TinyColor(color).isLight() ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)' }}
        onClick={() => onColorClick(color.getOriginalInput() as string)}
      >
        {color.getOriginalInput() as string}
      </button>
    </li>
  );
}

export default function Page() {
  const [sort, setSort] = useState('alphabetically');
  const [helperText, setHelperText] = useState('Click the color to copy its name to clipboard');
  const ref = useRef<ReturnType<typeof setTimeout>>();

  function handleColorClick(colorName: string) {
    void navigator.clipboard.writeText(colorName);

    setHelperText(`Color "${colorName}" copied to clipboard!`);

    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      setHelperText('Click the color to copy its name to clipboard');
    }, 1000);
  }

  return (
    <div>
      <div className="flex mb-2 gap-2 items-baseline px-2">
        Sorted by
        <button
          className="px-2 py-1 bg-slate-200 rounded hover:bg-slate-300 active:bg-slate-400"
          onClick={() => setSort('alphabetically')}
        >
          Name
        </button>
        <button
          className="px-2 py-1 bg-slate-200 rounded hover:bg-slate-300 active:bg-slate-400 "
          onClick={() => setSort('hue')}
        >
          Hue
        </button>
        <button
          className="px-2 py-1 bg-slate-200 rounded hover:bg-slate-300 active:bg-slate-400 "
          onClick={() => setSort('lightness')}
        >
          Lightness
        </button>
        {helperText}
      </div>

      <ul className="flex flex-wrap">
        {sort === 'alphabetically' &&
          colors
            .sort((a, b) => (a.getOriginalInput() as string).localeCompare(b.getOriginalInput() as string))
            .map((color) => (
              <ColorBlock key={color.getOriginalInput() as string} color={color} onColorClick={handleColorClick} />
            ))}

        {sort === 'hue' &&
          colors
            .sort((a, b) => b.toHsl().s - a.toHsl().s)
            .sort((a, b) => b.toHsl().h - a.toHsl().h)
            .map((color) => (
              <ColorBlock key={color.getOriginalInput() as string} color={color} onColorClick={handleColorClick} />
            ))}

        {sort === 'lightness' &&
          colors
            .sort((a, b) => b.toHsl().l - a.toHsl().l)
            .map((color) => (
              <ColorBlock key={color.getOriginalInput() as string} color={color} onColorClick={handleColorClick} />
            ))}
      </ul>
    </div>
  );
}
