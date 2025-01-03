import { BackgroundChanger } from "./Components/BackgroundChanger";
import { RecoilRoot, useRecoilState, useSetRecoilState } from "recoil";
import { colorState } from "./atoms";

function App() {
  return (
    <>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </>
  );
}

function MainApp() {
  const [color, setColor] = useRecoilState(colorState);
  return (
    <>
      <BackgroundChanger color={color} />
    </>
  );
}

export function Button({ colorCode, colorName }) {
  const setColor = useSetRecoilState(colorState);
  return (
    <div className={`rounded py-1 px-4 text-red-950 font-medium ${colorCode}`}>
      <button
        onClick={() => {
          setColor(colorCode);
        }}
      >
        {colorName}
      </button>
    </div>
  );
}
export default App;
