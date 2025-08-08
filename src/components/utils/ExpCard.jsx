
const ExpCard = ({ card }) => {
    return (
        
            <div className=" flex gap-6 p-5 bg-gradient-to-r from-[#6971A266] to-[#272A3C80] rounded hover:from-[#272A3C80] hover:to-[#6971A266] transition duration-200 items-center lg:flex-row md:flex-col">
                <img src={card.img} alt={card.img} className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] " />
                <div className='md:text-center lg:text-left'>
                    <h3 className="font-medium text-[20px] md:text-[24px] lg:text-[26px] pb-3 leading-[100%]">{card.title}</h3>
                    <p className="text-[#BEC1DD] text-[14px] md:text-[16px]">{card.desc}</p>
                </div>
            </div>

    )
}

export default ExpCard
