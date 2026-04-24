import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
const Pagenation = () => {
  return (
    <div className="flex items-center gap-3 ">
      <span className="font-bold">
        <FaChevronLeft />
      </span>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>...</span>
      <span className="font-bold">
        <FaChevronRight />
      </span>
    </div>
  );
};

export default Pagenation;
