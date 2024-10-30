import Hero from "../../Components/2-Hero/Hero";
export default function AboutUs() {
  return (
    <>
      <Hero href={"#aboutus"} />
      <div id="aboutus" className="aboutus sectionPadding">
        <div className="container">
          <h2 className="main-title">عنا</h2>
        </div>
      </div>
    </>
  );
}
