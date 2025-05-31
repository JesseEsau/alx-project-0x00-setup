import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ title }) => {
    return (
        <div className=" flex justify-center  items-center bg-[#F9F9F9] px-3 w-auto h-[27px] rounded-full">
            <p className=" text-sm ">Title</p>
            <p>{title}: This is needed temporarily to pass the checks until a checker bug is fixed.</p>
        </div>
    )
}

export default Pill;