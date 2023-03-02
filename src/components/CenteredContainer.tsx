import useWindowSize from "@/hooks/useWindowSize";
import { useState, useLayoutEffect, ReactNode } from "react";

type Props = {
  outerClassName: string;
  innerClassName: string;
  aspectWidth: number;
  aspectHeight: number;
  widthRate: number;
  heightRate: number;
  children: ReactNode;
}

/**
 * アスペクトを保ったまま中央ぞろえできるコンテナコンポーネント
 * innerWidth innerHeightを用いて実装している。
 * @param {string} outerClassName コンテナ背景のclassName
 * @param {string} innerClassName コンテナ内のclassName
 * @param {number} aspectWidth: コンテナのアスペクト比のwidth側
 * @param {number} aspectHeight: コンテナのアスペクト比のheight側
 * @param {number} widthRate: innerWidthに対する比 (widthRate < 1)
 * @param {number} heightRate: innerHeightに対する比 (heightRate < 1)
 * @param {ReactNode} children: コンテナ内部の要素
 * 
 * @returns 
 */
const CenteredContainer: React.FC<Props> = ({
  outerClassName,
  innerClassName,
  aspectWidth,
  aspectHeight,
  widthRate,
  heightRate,
  children }) => {
  const { innerWidth, innerHeight } = useWindowSize()
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const maxWidth = innerWidth * widthRate;
    const maxHeight = innerHeight * heightRate
    const aspect = aspectWidth / aspectHeight
    let w = maxWidth;
    let h = maxWidth / aspect
    if (maxWidth / maxHeight > aspect) {
      w = maxHeight * aspect;
      h = maxHeight;
    }
    setWidth(w);
    setHeight(h);
  }, [innerWidth, innerHeight]);

  return <>
    <div
      className={`flex justify-center grid content-center ${outerClassName}`}
      style={{ width: innerWidth, height: innerHeight }}
    >
      <div
        className={`${innerClassName}`}
        style={{ width, height }}
      >
        {children}
      </div>
    </div>
  </>;
}

export default CenteredContainer;
