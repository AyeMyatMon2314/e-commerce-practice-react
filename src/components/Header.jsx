function Header() {
  const tabsClassName = "text-dark-grayish-blue text-sm";
  return (
    <div className="flex flex-row items-center justify-between">
      {/* right contents */}
      <div className="flex flex-row  items-center gap-10">
        <h1 className="text-3xl  font-semibold text-color-very-dark-blue">
          sneakers
        </h1>
        <div className="flex flex-row items-center justify-center gap-6">
          <p className={tabsClassName}>Collections</p>
          <p className={tabsClassName}>Men</p>
          <p className={tabsClassName}>Women</p>
          <p className={tabsClassName}>About</p>
          <p className={tabsClassName}>Contact</p>
        </div>
      </div>

      {/* left contents */}
      <div className="flex flex-row items-center justify-center gap-8">
       <img src="./images/icon-cart.svg" className="size-5"/>
       <img src="./images/image-avatar.png" className="size-9"/>
      </div>
    </div>
  );
}

export default Header;
