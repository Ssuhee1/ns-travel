import { BlueTitle } from '../shared/Title';

const Outline = ({ text }) => {
  return (
    <div className='mb-10'>
      <BlueTitle text='ツアー概要' />
      <p className='text-xl font-semibold '>{text}</p>
    </div>
  );
};

export default Outline;
