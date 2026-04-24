import bestseller_drone from "../../assets/bestseller-drone.png"
import bestseller_watch from "../../assets/bestseller-watch.png"
const BestSelling = () => {
  return (
    <section className="p-4">
      <div className="flex justify-between items-center relative">
        <div className="flex-1">
          <img src={bestseller_watch} alt="" className="max-w-[18em]  " />
        </div>
        <div className="bg-slate-200 flex-2 ">
          <img
            src={bestseller_drone}
            alt=""
            className="max-w-[30em] absolute right-0 top-0 "
          />
        </div>
      </div>
    </section>
  );
}

export default BestSelling
