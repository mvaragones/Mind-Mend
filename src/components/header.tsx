export default function Navbar() {
  return (
    <div className="container mx-auto bg-transparent flex flex-row justify-between items-center py-3">
      <div>Mind Mend Health Care</div>
      <ul className="flex flex-row gap-5">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/terms">Terms & Condition</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
      </ul>
      <button className="bg-[#07A5D5] text-white rounded-full px-8 py-2">
        Login
      </button>
    </div>
  );
}
