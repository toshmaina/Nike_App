export interface ButtonType {
    id: number;
    title: string,
    src: string,
    showOnSmallDevices: boolean
    noPadding: boolean,
    addToCartButton: boolean
}
const Button = ({title,src,showOnSmallDevices}:Partial< ButtonType>) => (
    <button className={`rounded-full border-[coral]  bg-[coral] flex justify-center items-center px-7 py-3 text-lg   border leading-none w-fit h-fit ${showOnSmallDevices   && `max-lg:w-[32vh]  `}  `}>
        {title}
        <img src={src} alt="arrow right"  className="text-white  leading-none ml-2 p-1 w-5 h-5 rounded  " />     
    </button>
)
 
export default Button;
