import CenteredContainer from "@/components/CenteredContainer";
import { NextPage } from "next";

const Sample: NextPage = () => {
  return <>
    <div className="w-full h-full">
      <CenteredContainer
        outerClassName="bg-black/20"
        innerClassName="bg-red-300 rounded-[30px]"
        aspectWidth={5}
        aspectHeight={8}
        widthRate={0.5}
        heightRate={0.5}
      >
        <div className="text-center">hoge</div>
        <div className="text-center">hoge</div>
      </CenteredContainer>
    </div>
  </>;
}

export default Sample;