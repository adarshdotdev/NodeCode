export default function Header() {
  return (
    <div className="flex flex-col gap-4 my-5 sm:my-8    items-center ">
      <div>
        <img src="/NoteCodeLogo.svg" alt="logo" />
      </div>
      <p className="font-bold text-3xl">Create & Share</p>
      {/* <p className="font-bold text-3xl">Your Code easily</p> */}
    </div>
  );
}
