import { ClimbingBoxLoader } from 'react-spinners';

const Spinner = ({ size = 15, color = "#897878" }) => {
    return <ClimbingBoxLoader color={color} size={size} />;
};

export default Spinner;