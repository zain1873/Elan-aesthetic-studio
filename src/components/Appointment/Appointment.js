import Image from "next/image";
import "./Appointment.css";

export default function Appointment() {
  return (
    <section className="appointment">
      {/* <div className="appointment__header">
        <p className="appointment__eyebrow">
          <span className="appointment__dot" />
          Contact Us
        </p>
        <h2 className="appointment__title">
          Book Your
          <span className="appointment__title--muted">Consultation Now</span>
        </h2>
      </div> */}

      <div className="appointment__body">
        <div className="appointment__image">
          <Image
            src="/images/appointment-img.webp"
            alt="Treatment room"
            fill
            className="appointment__image-el"
          />
        </div>

        <form className="appointment__form">
          <div className="appointment__field">
            <label htmlFor="name">
              Name <span className="appointment__required">*</span>
            </label>
            <input id="name" type="text" placeholder="Eg. John Doe" required />
          </div>

          <div className="appointment__row">
            <div className="appointment__field">
              <label htmlFor="email">
                Email Address <span className="appointment__required">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="Eg. johndoe@gmail.com"
                required
              />
            </div>

            <div className="appointment__field">
              <label htmlFor="phone">
                Phone <span className="appointment__required">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Eg. +92344000000"
                required
              />
            </div>
          </div>

          <h3 className="appointment__subheading">Appointment Details</h3>

          <div className="appointment__row">
            <div className="appointment__field">
              <label htmlFor="service">Service Selection</label>
              <select id="service">
                <option>Skin Treatment</option>
                <option>Hair Treatment</option>
                <option>Body Contouring</option>
                <option>Laser Treatment</option>
              </select>
            </div>

            <div className="appointment__field">
              <label htmlFor="date">Preferred Date</label>
              <input id="date" type="date" placeholder="Choose Date" />
            </div>
          </div>

          <div className="appointment__field">
            <label htmlFor="requests">Special Requests</label>
            <textarea
              id="requests"
              rows={4}
              placeholder="Any Special Request from us"
            />
          </div>

          <button type="submit" className="appointment__submit">
            Book Appointment
          </button>
        </form>
      </div>
    </section>
  );
}