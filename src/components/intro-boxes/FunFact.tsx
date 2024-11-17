import { useEffect, useState } from "react";

const FunFact = () => {
  const [funFact, setFunFact] = useState<string>("");
  useEffect(() => {
    const date = new Date();
    const num =
      date.getDate() * (date.getMonth() + 1) + (date.getFullYear() % 72);
    fetch(`http://numbersapi.com/${num}/math`)
      .then((res) => res.text())
      .then((data) => setFunFact(data))
      .catch((error) => {
        setFunFact("Whoops, there was an error fetching the fun fact. ");
        console.error(error);
      });
  }, []);

  return (
    <div className="p-5 flex flex-col w-full h-full  text-gray-300 relative">
      <h1
        className="text-2xl
       font-bold pb-4"
      >
        Fun Math Fact!
      </h1>

      <h2 className="text-xl font-semibold">Did you know?</h2>
      <p className="py-5 text-lg flex-grow">{funFact}</p>
      <p>Fun facts from numbersapi.com</p>
    </div>
  );
};

export default FunFact;
