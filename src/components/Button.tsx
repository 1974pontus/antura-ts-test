interface Props {
  getUserData: () => void;
}

const Button: React.FC<Props> = ({ getUserData }) => {
  function handleClick() {
    getUserData();
  }

  return (
    <div>
      <button onClick={handleClick}>Get me a new user</button>
    </div>
  );
};

export default Button;
