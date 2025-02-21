import { useState } from "react";

const Application = () => {
  const [copied, setCopied] = useState(false);
  const email = "careers@sharecal.io";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true); // Update state to show email text
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };
  return (
    <div>
      <div className="backToCareer">
        <button>&larr; Back to Careers</button>
      </div>

      <div>
        <h2>Founding Engineer, Full Stack</h2>
        <br></br>
        <h3>About the Company</h3>
        <br></br>
        <p>
          ShareCal is an innovative company revolutionizing the way executive
          assistants manage their executives’ calendars. We’re on a mission to
          simplify scheduling and enhance collaboration for individuals and
          teams worldwide. Our platform combines cutting-edge technology with
          intuitive design to create a seamless calendar experience that adapts
          to modern work and lifestyle needs.
        </p>
        <br></br>
        <h3>About the Role</h3>
        <br></br>
        <p>
          We’re looking for a full stack founding engineer who is passionate
          about building tools that users love and use every day. You’ll work on
          the core product, interact with users (executive assistants, managers,
          and professionals in various industries), and play a key role in
          shaping the roadmap. Under the hood, ShareCal is a high performance
          calendar management platform built with modern Typescript, React, and
          OpenAI. Our users work at some of the world’s best companies and
          expect our product to be lightning fast, reliable, and intuitive. We
          value pragmatism over cleverness, but are not afraid to go very deep
          and use bleeding edge technology if needed to deliver the best
          possible user experience. In this role, you will:
          <ul>
            <li>
              Play a significant role in the foundational UI architecture,
              technology choices, and implementation. You’ll be empowered to
              both collaborate closely with veteran designers and explore your
              own ideas.
            </li>
            <li>
              Work on the core product, developing features that enhance the
              calendar management and scheduling experience for our users. •
              Interact directly with users to understand their needs, gather
              feedback, and use these insights to inform product improvements
              and new features.
            </li>
            <li>
              Be comfortable working across the full stack, from frontend to
              backend to AI/infrastructure, contributing your expertise to all
              aspects of ShareCal’s development and architecture.
            </li>
          </ul>
        </p>
        <br></br>
        <h3>Competencies</h3>
        <br></br>
        <p>
          <ul>
            <li>
              Owner mentality with a bias for action: You take full
              responsibility for projects from start to finish. You proactively
              identify problems, drive solutions, and ensure that what you build
              meets both user and business needs. You don't wait to be told what
              to do—you make things happen.
            </li>
            <li>
              Strong work ethic: You are persistent, disciplined, and take
              initiative to deliver high-quality results. You manage time
              effectively and thrive in a fast-paced environment.
            </li>
            <li>
              Obsessed with coding, prototyping, and building: You are a
              prolific engineer with a strong GitHub contributions graph and a
              track record of shipping impactful projects. You take pride in
              writing clean, maintainable code and continuously learning new
              technologies to stay ahead of the curve.
            </li>
            <li>
              Product-driven mindset and strong user empathy: You will be
              excited to dive into the needs of our customers and anticipate
              ways we can enhance our features and influence the product
              roadmap.
            </li>
            <li>
              Embraces ambiguity: You will be working closely with the founders
              to solve big problems. You will need to be energized by unknowns
              and solve open-ended problems without clear boundaries or
              requirements.
            </li>
          </ul>
        </p>
        <div className="button">
          {!copied ? (
            <button onClick={copyToClipboard}>Apply now &rarr;</button>
          ) : (
            <div className="copiedToClipboard">
              <span>Email copied to your clipboard</span>
              <br></br>
              <span>Please mail us your resume</span>
              <br></br>
              <span>All the best!!</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Application;
