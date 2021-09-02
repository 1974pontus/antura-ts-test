import Button from "../components/Button";
import IconRow from "../components/IconRow";

type Props = {
  medium: string;
  first: string;
  last: string;
  country: string;
  state: string;
  email: string;
  cell: string;
  getUserData: () => void;
};

const Person: React.FC<Props> = ({
  medium,
  first,
  last,
  country,
  state,
  email,
  cell,
  getUserData,
}) => {
  return (
    <div className="Person">
      <div className="content">
        <div>
          <img className="pic" src={medium} alt="user img" />
          <p>
            {first} {last}
          </p>
          <p>
            {country}, {state}
          </p>
          <IconRow email={email} cell={cell} />
          <Button getUserData={getUserData} />
        </div>
      </div>
    </div>
  );
};

export default Person;
