import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";
import Tooltip from "@material-ui/core/Tooltip";

type Props = {
  email: string;
  cell: string;
};

const IconRow: React.FC<Props> = ({ email, cell }) => {
  return (
    <div className="iconrow">
      <Tooltip title={email}>
        <MailOutlineIcon />
      </Tooltip>
      <Tooltip title={cell}>
        <PhoneIcon />
      </Tooltip>
    </div>
  );
};

export default IconRow;
