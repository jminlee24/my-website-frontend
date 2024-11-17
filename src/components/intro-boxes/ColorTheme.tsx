type Props = {
  color: string;
  handleColorChange: (str: string) => void;
};

const ColorTheme = (props: Props) => {
  return (
    <div
      className="p-5 flex flex-row w-full h-full  text-gray-300 relative"
      key={props.color}
    >
      <div className="w-full flex flex-row justify-between align-middle items-center">
        <div
          className={`border-outline border-4 bg-red rounded-full w-12 h-12 min-w-12`}
          onClick={() => props.handleColorChange("red")}
        ></div>
        <div
          className={`border-outline border-4 bg-green rounded-full w-12 h-12 min-w-12`}
          onClick={() => props.handleColorChange("green")}
        ></div>
        <div
          className={`border-outline border-4 bg-blue rounded-full w-12 h-12 min-w-12`}
          onClick={() => props.handleColorChange("blue")}
        ></div>
        <div
          className={`border-outline border-4 bg-white rounded-full w-12 h-12 min-w-12`}
          onClick={() => props.handleColorChange("white")}
        ></div>
      </div>
    </div>
  );
};

export default ColorTheme;
