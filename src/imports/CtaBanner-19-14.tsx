import imgCtaBanner from "figma:asset/dcf870b790f0807a59b98fdf0a340a100ac50792.png";

function Container() {
  return <div className="absolute bg-[rgba(44,44,44,0.65)] h-[527.938px] left-0 top-0 w-[1099px]" data-name="Container" />;
}

function Heading() {
  return (
    <div className="absolute h-[65.938px] left-[24px] top-0 w-[1051px]" data-name="Heading 2">
      <p className="-translate-x-1/2 absolute font-['Cormorant_Garamond:Regular',sans-serif] leading-[65.94px] left-[525.01px] not-italic text-[43.96px] text-center text-white top-0 whitespace-nowrap">Recenter Your Senses</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[27.195px] left-[293.5px] top-[85.94px] w-[512px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Light',sans-serif] font-light leading-[27.2px] left-[255.66px] not-italic text-[16px] text-[rgba(255,255,255,0.7)] text-center top-[-0.5px] whitespace-nowrap">Escape the rush and rediscover balance. Book your next treatment.</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#c4929b] h-[54.805px] left-[470.7px] rounded-[16777200px] top-[153.13px] w-[157.602px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.8px] left-[79px] not-italic text-[15.2px] text-center text-white top-[16.5px] tracking-[0.5106px] whitespace-nowrap">Book Now</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[208px] left-0 top-[160px] w-[1099px]" data-name="Container">
      <Heading />
      <Paragraph />
      <Button />
    </div>
  );
}

export default function CtaBanner() {
  return (
    <div className="relative size-full" data-name="CtaBanner">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCtaBanner} />
      <Container />
      <Container1 />
    </div>
  );
}