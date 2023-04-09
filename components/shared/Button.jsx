import { IoIosArrowDown } from 'react-icons/io';
export const YellowButton = ({ label, onClick }) => {
  return (
    <button
      className='bg-defaultYellow text-xl font-semibold px-10 rounded-xl py-2 flex items-center hover:bg-yellow-200'
      onClick={onClick}>
      {label}
      <IoIosArrowDown className='ml-2' />
    </button>
  );
};
