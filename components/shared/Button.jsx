import { IoIosArrowDown } from 'react-icons/io';
export const YellowButton = ({ label, onClick, icon = true, type = null }) => {
  return (
    <button
      type={type}
      className='bg-defaultYellow text-xl font-semibold px-10 rounded-xl py-2 flex items-center hover:bg-yellow-200'
      onClick={onClick}>
      {label}
      {icon && <IoIosArrowDown className='ml-2' />}
    </button>
  );
};
