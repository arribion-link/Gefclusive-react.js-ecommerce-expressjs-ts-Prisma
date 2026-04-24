import bestseller_drone from "../../assets/bestseller-drone.png"
// import bestseller_watch from "../../assets/bestseller-watch.png"
const BestSelling = () => {
  return (
    <section className="p-4">
      <div className="flex justify-between items-start gap-12 relative">
        <div className="flex-1 ">
          <h1>Newly </h1>
        </div>
        <div className="bg-sky-600 flex-2 min-h-[40vh]">
          <img
            src={bestseller_drone}
            alt=""
            className="max-w-[40em] absolute right-0 -top-25 "
          />
        </div>
      </div>
    </section>
  );
}

export default BestSelling
