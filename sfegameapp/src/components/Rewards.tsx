function Rewards() {
  return (
    <div className="bg-white h-60 shadow-md flex flex-col justify-between items-start rounded-2xl p-5 mb-5">
      <div>
        <h2 className="font-bold text-xl pl-1">Your Rewards</h2>
      </div>
      <div className="flex flex-col space-y-2">
        <span>Gold Trophy</span>
        <span>Silver Medal</span>
        <span>Bronze Star</span>
        <span>Emerald Badge</span>
      </div>
    </div>
  );
}

export default Rewards;
