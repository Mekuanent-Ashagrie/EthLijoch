import Link from "next/link";
const Sidebar = ({ show, close }) => {
  return (
    <div id="sidebar2" className={`side-menu__block ${show ? "active" : ""}`}>
      <div
        className="side-menu__block-overlay custom-cursor__overlay"
        onClick={close}
      />
      <div className="inner-sidebar side-menu__block-inner fl-st-1">
      <iframe
          title="Survey"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdH4rZpKlBUQ71pJrJentzaM-n_z1kes7bkw2JXllRxoPd9BA/viewform?embedded=true"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          style={{ width: '100%', height: 'calc(100% - 3px)' }}
        >
          Loading…
        </iframe>
      </div>
      {/*/inner-sidebar*/}
    </div>
  );
};
export default Sidebar;
