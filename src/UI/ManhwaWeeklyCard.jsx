

const ManhwaWeeklyCard = ({item}) => {
  return (
    <div className='flex justify-center'>
        <div className='cursor-pointer mb-2 max-w-[220px] text-left space-y-3'>
            <div>
                <img src={item.poster} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ManhwaWeeklyCard