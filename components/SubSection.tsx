import { ReactNode } from "react";

interface Props {
  badge: string;
  title: string;
  className?: string;
  align?: string;
  children?: ReactNode;
}

export default function SubSection({
  badge,
  title,
  className = "",
  align = "",
  children,
}: Props) {
  return (
    <section className="py-5">
      <div className="my-5">
        <div className="row">
          <div className={`${align === "center" && "offset-lg-4 col-lg-4"}`}>
            <small className="primaryPoint text-uppercase fw-bold">
              {badge}
            </small>
            <h5 className={`my-2 ${className}`}>{title}</h5>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
