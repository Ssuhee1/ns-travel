export const YellowTitle = ({ text }) => {
  return (
    <div className='flex w-full justify-center'>
      <h1 className='bg-defaultYellow rounded-lg px-5 py-2 text-3xl font-semibold mb-5'>
        {text}
      </h1>
    </div>
  );
};

export const BlueTitle = ({ text }) => {
  return (
    <div className='flex w-full justify-center'>
      <h1 className='bg-defaultBlue px-5 py-2 w-full text-3xl font-semibold mb-5'>
        {text}
      </h1>
    </div>
  );
};

const Title = ({ children, level }) => {
  return <h1 className={`text-semibold text-${level}xl mb-5`}>{children}</h1>;
};

export default Title;
