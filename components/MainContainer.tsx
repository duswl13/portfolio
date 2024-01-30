import { ReactNode } from "react";
import { useSpring, animated } from "@react-spring/web";

interface Props {
  title: string;
  content?: string;
  children?: ReactNode;
}

export default function MainContainer({ title, content, children }: Props) {
  const styles = useSpring({
    from: {
      opacity: 0,
      y: "20%",
    },
    to: {
      opacity: 1,
      y: "0%",
    },
  });
  return (
    <main className="container">
      <section className="p-5">
        <animated.div style={styles}>
          <div className="row p-5">
            <div className="col-12 text-center">
              <h1 className="mb-3 fw-bolder text-gradient">{title}</h1>
              <p>{content}</p>
            </div>
          </div>
        </animated.div>
      </section>
      {children}
    </main>
  );
}
