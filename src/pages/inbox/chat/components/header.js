const { default: Icon } = require("components/Icon");

const Header = ({ user }) => {
  return (
    <header className="h-[60px] border-b border-gray-300 flex items-center justify-between px-8">
      <button className="flex items-center gap-x-3.5">
        <img src={user.avatar} className="w-6 h-6 rounded-full" />
        <h6 className="text-base font-bold">{user.name}</h6>
      </button>
      <button>
        <Icon name="info" size={24} />
      </button>
    </header>
  );
};
export default Header;
