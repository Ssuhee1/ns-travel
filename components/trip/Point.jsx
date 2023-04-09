import { BlueTitle } from '../shared/Title';

const Point = ({ children }) => {
  return (
    <div className='mb-10'>
      <BlueTitle text='ツアーポイント' />
      <ul className='font-semibold text-xl'>{children}</ul>
    </div>
  );
};

export default Point;
