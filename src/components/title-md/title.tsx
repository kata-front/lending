import "./title.scss";

type TitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function Title({ eyebrow, title, subtitle, align = "left" }: TitleProps) {
  return (
    <div className={`title-block title-block--${align}`}>
      {eyebrow ? <span className="title-block__eyebrow">{eyebrow}</span> : null}
      <h2 className="title-block__title">{title}</h2>
      {subtitle ? <p className="title-block__subtitle">{subtitle}</p> : null}
    </div>
  );
}
