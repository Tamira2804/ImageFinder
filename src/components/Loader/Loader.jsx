import { ThreeCircles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeCircles
      height="100"
      width="100"
      color="#4fa94d"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      //   outerCircleColor="#8B6CBE"
      //   innerCircleColor="#9C51B6"
      //   middleCircleColor="#6495ED"
    />
  );
};

export default Loader;
