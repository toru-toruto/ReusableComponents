import useGlobalStore from "@/stores/useGlobalStore";
import { ReactNode, useEffect } from "react";
import ReactLoading from "react-loading";

type Props = {
  children: ReactNode;
}

const Loading: React.FC<Props> = ({ children }) => {
  const { isLoading } = useGlobalStore((state) => ({
    isLoading: state.isLoading,
  }));

  return <>
    <div className="h-full">
      {isLoading ?
        <div className="h-full grid content-center">
          <ReactLoading
            type="spin"
            color="black"
            className="mx-auto"
            width={'100px'}
            height={'100px'}
          />
        </div>
        : <>
          {children}
        </>
      }
    </div>
  </>;
}

export default Loading;