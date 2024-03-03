import TitlePage from "../components/TitlePage";

export default function Header({ title = "Seu Guia de TV Aberta", children }) {
  return (
    <div className="flex w-full justify-between items-center mr-5 px-4 py-4 min-h-40">
      <TitlePage name={title} />

      {children}
    </div>
  );
}
