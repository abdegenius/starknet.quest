interface PoolCardProps {
  tokenPair: string;
  type: string;
  apr: number;
  tvl: number;
  dailyRewards: number;
  protocol: {
    name: string;
    icon: string;
  };
  token1Icon: string;
  token2Icon: string;
}

export default function DefiOpportunityCardComponent({
  tokenPair = "STRK-ETH",
  type = "Liquidity",
  apr = 0,
  tvl = 0,
  dailyRewards = 0,
  protocol = {
    name: "Ekubo",
    icon: "/protocol-icon.svg",
  },
  token1Icon = "/strk-icon.svg",
  token2Icon = "/eth-icon.svg",
}: PoolCardProps) {
  return (
    <div className="w-full bg-[#1F1F25] p-6 rounded-lg mt-6 lg:mt-0">
      <div className="w-full flex justify-between items-start mb-2 relative">
        <div>
          <h2 className="text-[18px] xl:text-[24px] font-[700] text-white mb-1">
            {tokenPair}
          </h2>
          <p className="text-[12px] xl:text-[14px] font-[400] gradient-text">
            {type}
          </p>
        </div>
        <div className="flex-none flex -space-x-2 -mt-12">
          {token1Icon ? (
            <div className="w-[48px] h-[48px] xl:w-[56px] xl:h-[56px] rounded-full overflow-hidden border border-[#A6A5A7] flex flex-none">
              <img
                src={token1Icon}
                alt="Token 1"
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            ""
          )}
          {token2Icon ? (
            <div className="w-[48px] h-[48px] xl:w-[56px] xl:h-[56px] rounded-full overflow-hidden border border-[#A6A5A7] flex flex-none">
              <img
                src={token2Icon}
                alt="Token 2"
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="w-full grid grid-cols-3 gap-4 my-8 divide-x-[1px] divide-[#29282B]">
        <div className="w-full mx-auto flex flex-col items-center justify-center text-center">
          <p className="text-[#A6A5A7] text-[12px] xl:text-[14px] font-[400] mb-1">
            APR
          </p>
          <p className="text-[16px] xl:text-[20px] font-[700] text-[#F4FAFF]">
            {apr}%
          </p>
        </div>
        <div className="w-full mx-auto flex flex-col items-center justify-center text-center">
          <p className="text-[#A6A5A7] text-[12px] xl:text-[14px] font-[400] mb-1">
            TVL
          </p>
          <p className="text-[16px] xl:text-[20px] font-[700] text-[#F4FAFF]">
            ${tvl}m
          </p>
        </div>
        <div className="w-full mx-auto flex flex-col items-center justify-center text-center">
          <p className="text-[#A6A5A7] text-[12px] xl:text-[14px] font-[400] mb-1">
            {type == "Staking" ? "Lock Period" : "Daily Rewards"}
          </p>
          <p className="text-[16px] xl:text-[20px] font-[700] text-[#F4FAFF]">
            {type == "Staking" ? `${dailyRewards} days` : `$${dailyRewards}`}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 w-full">
        <p className="text-[12px] font-[400] text-[#A6A5A7] w-full">Protocol</p>
        <div className="flex items-center gap-1.5 flex-none w-auto">
          <div className="w-[16px] h-[16px] border border-[#A6A5A7] rounded-full overflow-hidden">
            {/* <img
              src={protocol.icon}
              alt={protocol.name}
              className="w-full h-full object-cover"
            /> */}
            <div className="w-full h-full object-over"></div>
          </div>
          <span className="text-[#F4FAFF] text-[14px] font-[400]">
            {protocol.name}
          </span>
        </div>
      </div>
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(90deg, #6affaf -0.12%, #5ce3fe 99.88%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
}
