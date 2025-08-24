import { MoonLoader } from 'react-spinners';

const SuspenseLoader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <MoonLoader color="#E44848" />
    </div>
  );
};

export default SuspenseLoader;
