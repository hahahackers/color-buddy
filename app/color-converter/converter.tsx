'use client';

import { observer } from 'mobx-react-lite';
import { color } from '@/app/color-converter/store';

export const Converter = observer(() => {
  return (
    <main className="m-12 flex gap-4">
      <table>
        <tbody>
          <tr>
            <td>
              <span className="uppercase">
                Hex:
                <sup>
                  <a
                    className="text-blue-400 hover:text-blue-500"
                    target="_blank"
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/hex-color"
                  >
                    MDN
                  </a>
                </sup>
              </span>
            </td>
            <td>
              #
              <input
                className="w-24 text-slate-500"
                type="text"
                value={color.hex}
                onChange={(event) => color.setHex(event.target.value)}
                maxLength={8}
                pattern="^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
              />
            </td>
            <td rowSpan={2} className="pl-10">
              <div
                className="w-24 h-24 rounded"
                style={{
                  backgroundColor: '#' + color.hex,
                }}
              ></div>
            </td>
          </tr>
          <tr>
            <td className="pr-10">
              <span className="uppercase">RGBA: </span>
            </td>
            <td>
              <div>
                rgb(
                <input
                  className="w-10 text-right text-slate-500"
                  type="text"
                  value={color.r}
                  onChange={(event) => color.setR(event.target.value)}
                  maxLength={8}
                  pattern="^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
                />
                ,
                <input
                  className="w-10 text-right text-slate-500"
                  type="text"
                  value={color.g}
                  onChange={(event) => color.setG(event.target.value)}
                  maxLength={8}
                  pattern="^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
                />
                ,
                <input
                  className="w-10 text-right text-slate-500"
                  type="text"
                  value={color.b}
                  onChange={(event) => color.setB(event.target.value)}
                  maxLength={8}
                  pattern="^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
                />
                ,
                <input
                  className="w-10 text-right text-slate-500"
                  type="text"
                  value={color.a}
                  onChange={(event) => color.setA(event.target.value)}
                  maxLength={8}
                  pattern="^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
                />
                )
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
});
