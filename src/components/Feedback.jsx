import { useState } from "react";

function Feedback(props) {
  let text;
  const [message, setMessage] = useState("");
  if (props.review === "Unhappy" || props.review === "Neutral") {
    text =
      "Sorry about your experience. We'll use this feedback to improve our services";
  } else {
    text =
      "We're thrilled you were satisfied with our service. We'll continue to do our best!";
  }

  return (
    <div
      id="container"
      style={props.hide ? { display: "flex" } : { display: "none" }}
    >
      <p className="h3">Thank you!</p>
      <p className="h2">Feedback: {props.review}</p>
      <p className="h6 review-message">{text}</p>
    </div>
  );
}

export default Feedback;
