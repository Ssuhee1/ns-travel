const Overview = ({
  startDate = '4月24日～9月15日',
  cost = '209,000円- 299,000円',
  person = '2-14',
  startPlace = '東京',
}) => {
  return (
    <div className='bg-defaultGray flex flex-col items-center py-5 text-xl font-semibold mb-10'>
      <div>
        <span className='bg-defaultYellow mr-2 px-2 rounded-lg'>出発日</span>
        {startDate}
      </div>
      <div>
        <span className='bg-defaultYellow mr-2 px-2 rounded-lg'>旅行代金</span>
        {cost}
      </div>
      <div>
        {person}
        <span className='bg-defaultYellow ml-2 px-2 rounded-lg'>参加者</span>
      </div>
      <div>
        <span className='bg-defaultYellow mr-2 px-2 rounded-lg'>出発地</span>
        {startPlace}
      </div>
    </div>
  );
};
export default Overview;
