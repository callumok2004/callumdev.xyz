const Footer = () => {
  return <>
    <div style={{ bottom: "10px" }} className="hidden z-[999] fixed w-[90%] md:w-[50rem] xs:flex flex-row justify-between items-center px-4 py-2 mt-4 md:mt-6 rounded-md bg-white/60 dark:bg-[#12181d]/60 border border-slate-800/50 backdrop-blur-lg">
      <div>
        <h1 className="text-black dark:text-white/50 text-2xl font-semibold">Callum OKane</h1>
        <h2 className="text-black/60 dark:text-white/30 text-base">Software Engineer • 2022</h2>
      </div>
      <div>
        <span>Forked from <a style={{
          color: "rgba(100, 100, 255)"
        }} href="https://github.com/cnrad/cnrad-dev">cnrad.dev</a></span>
      </div>
    </div>
  </>;
};

export default Footer;
