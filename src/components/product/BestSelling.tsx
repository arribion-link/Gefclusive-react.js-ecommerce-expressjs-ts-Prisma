import bestseller_drone from "../../assets/bestseller-drone.png"
// import bestseller_watch from "../../assets/bestseller-watch.png"
const BestSelling = () => {
  return (
    <section className="p-4">
      <div className="relative">
        <div className="bg-sky-600 flex-2 min-h-[40vh] p-4">
          <h1 className="text-slate-50 font-bold text-[clamp(1.3em,5vw,2em)]">Explore some of our <br /> best selling product</h1>
          <img
            src={bestseller_drone}
            alt=""
            className="max-w-[45em] absolute right-0 -top-25 "
          />
        </div>
      </div>
    </section>
  );
}

export default BestSelling
