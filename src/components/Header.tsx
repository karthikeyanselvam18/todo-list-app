import "../sass/Header.scss";
export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <header>
      <div className="logo">
        <h1>ToDo!</h1>
      </div>
    </header>
  );
}
