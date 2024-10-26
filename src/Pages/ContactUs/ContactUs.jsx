import "./contactus.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import done from "../../../public/animations/done.json";
import Hero from "../../Components/2-Hero/Hero";
export default function ContactUs() {
  const [state, handleSubmit] = useForm("xrbgzynr");
  return (
    <>
      <Hero href={"#contact"} />
      <div id="contact" className="contact">
        <div className="overlay"></div>
        <div className="container">
          <h2 className="main-title">رائيك يهمنا</h2>
          <form onSubmit={handleSubmit}>
            <div className="left">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  id="name"
                  name="name"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Your Phone"
                  required
                  id="phone"
                  name="phone"
                />
                <ValidationError
                  prefix="Number"
                  field="phone"
                  errors={state.errors}
                />
              </div>
              <div>
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>
            <div className="right">
              <div>
                <textarea
                  required
                  id="message"
                  name="message"
                  placeholder="Your Message"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <div>
                <input
                  type="submit"
                  disabled={state.submitting}
                  value={state.submitting ? "Sending..." : "Send"}
                />
              </div>
            </div>
          </form>
          {state.succeeded && (
            <h2
              style={{
                position: "relative",
                zIndex: "5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "18px",
                marginTop: "1.7rem",
                color: "var( --transparent-color)",
              }}>
              <Lottie
                style={{
                  height: "45px",
                  marginRight: "5px",
                }}
                loop={false}
                animationData={done}
              />
              Thank You, Your Message has been sent successfuly 👌
            </h2>
          )}
        </div>
      </div>
    </>
  );
}
